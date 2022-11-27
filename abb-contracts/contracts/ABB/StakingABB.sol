// SPDX-License-Identifier: BUSL-1.1

pragma solidity 0.8.4;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract StakingABB is ReentrancyGuard {
    ERC20 public ABB;
    uint256 public totalStakedAmount;
    struct StakedAmount {
        uint256 depositTimestamp;
        uint256 amount;
        uint256 lockUpPeriod;
        string solanaAddress;
        uint256 nextIndex;
    }
    struct StakeDetail {
        uint256 collectedRewards; // done: Value not updating
        StakedAmount[] stakedAmounts;
        uint256 startIndex;
    }
    event Stake(
        address indexed account,
        uint256 amount,
        uint256 lockUpPeriod,
        string solanaAddress,
        uint256 currentTime,
        uint256 unlockTime
    );
    event Withdraw(address indexed account, uint256 amount);

    mapping(address => StakeDetail) public stakeDetailPerUser;
    mapping(uint256 => uint256) public lockupDaysToAPY;

    // Sets the lock-up days with their corresponding APY in the constructor
    constructor(ERC20 token) {
        ABB = token;
        lockupDaysToAPY[30] = 500;
        lockupDaysToAPY[60] = 1000;
        lockupDaysToAPY[90] = 1500;
    }

    // Reward will be returned with a factor of 1e18 (ABB token decimals)
    function _calculateReward(
        uint256 amount,
        uint256 lockUpDays,
        uint256 currentDayCount
    ) internal view returns (uint256 reward) {
        currentDayCount = currentDayCount > lockUpDays
            ? lockUpDays
            : currentDayCount;
        reward =
            (lockupDaysToAPY[lockUpDays] * amount * currentDayCount) /
            (365 * 1e4);
    }

    // lockUpDays : Input in number of days
    // Reward will be returned with a factor of 1e18 (ABB token decimals)
    function calculateReward(uint256 amount, uint256 lockUpDays)
        external
        view
        returns (uint256 reward)
    {
        reward = _calculateReward(amount, lockUpDays, lockUpDays);
    }

    function calculateUserReward(
        address account // Check: linked list + stakeDetailPerUser[msg.sender].collectedRewards
    ) external view returns (uint256 reward) {
        StakedAmount[] memory userStakingDetails = stakeDetailPerUser[account]
            .stakedAmounts;
        uint256 startIndex = stakeDetailPerUser[msg.sender].startIndex;
        uint256 n = startIndex;
        reward = stakeDetailPerUser[account].collectedRewards;
        while (n < userStakingDetails.length) {
            uint256 dayCount = (block.timestamp -
            userStakingDetails[n].depositTimestamp) / 1 days;
            reward += _calculateReward(
                userStakingDetails[n].amount,
                userStakingDetails[n].lockUpPeriod,
                dayCount
            ); // done : maintain a user level variable which adds up this value
            n = userStakingDetails[n].nextIndex;
        }
    }
    

    function claimableTokens(
        address account // CHECK: linked list
    ) external view returns (uint256 tokens) {
        StakedAmount[] memory userStakingDetails = stakeDetailPerUser[account]
            .stakedAmounts;
        uint256 startIndex = stakeDetailPerUser[msg.sender].startIndex;
        uint256 n = startIndex;
        uint256 amountToWithdraw;
        while (n < userStakingDetails.length) {
            if (
                userStakingDetails[n].depositTimestamp +
                    userStakingDetails[n].lockUpPeriod <=
                block.timestamp
            ) {
                amountToWithdraw += userStakingDetails[n].amount;
            } 
            n = userStakingDetails[n].nextIndex;
        }
    }

    // Lockup period is in days
    function stake(
        uint256 amount,
        uint256 lockUpPeriod,
        string memory solanaAddress
    ) external nonReentrant {
        // done : non-reenterncy - done
        address account = msg.sender;
        uint256 currentTime = block.timestamp;
        StakedAmount memory amountStaked = StakedAmount(
            currentTime,
            amount,
            lockUpPeriod,
            solanaAddress,
            stakeDetailPerUser[account].stakedAmounts.length+1
        );
        stakeDetailPerUser[account].stakedAmounts.push(amountStaked);
        totalStakedAmount += amount;

        bool success = ABB.transferFrom(account, address(this), amount); // done: move to the end - done
        require(success, "Staking didn't go through");
        emit Stake(
            account,
            amount,
            lockUpPeriod,
            solanaAddress,
            currentTime,
            currentTime + lockUpPeriod * 1 days
        ); // done: Add expiration and creation time - done
    }

    function withdraw() external nonReentrant {
        StakedAmount[] memory userStakingDetails = stakeDetailPerUser[
            msg.sender
        ].stakedAmounts;
        StakedAmount[] memory revisedUserStakingDetails;

        uint256 startIndex = stakeDetailPerUser[msg.sender].startIndex;
        uint256 n = startIndex;
        uint256 formerIndex;
        uint256 amountToWithdraw;
        uint256 collectedRewards;
        while (n < userStakingDetails.length) {
            if (
                userStakingDetails[n].depositTimestamp +
                    userStakingDetails[n].lockUpPeriod <=
                block.timestamp
            ) {
                amountToWithdraw += userStakingDetails[n].amount;
                collectedRewards += _calculateReward(
                    userStakingDetails[n].amount,
                    userStakingDetails[n].lockUpPeriod,
                    userStakingDetails[n].lockUpPeriod
                ); // done : maintain a user level variable which adds up this value

                if (n == startIndex) {
                    startIndex = userStakingDetails[n].nextIndex;
                } else {
                    userStakingDetails[formerIndex]
                        .nextIndex = userStakingDetails[n].nextIndex;
                }
            } else {
                formerIndex = n;
            }
            n = userStakingDetails[n].nextIndex;
        }
        stakeDetailPerUser[msg.sender].startIndex = startIndex;
        stakeDetailPerUser[msg.sender].collectedRewards = collectedRewards;
        totalStakedAmount -= amountToWithdraw; //done: DO a cumulative difference at the end

        bool success = ABB.transfer(msg.sender, amountToWithdraw); // done: DO a cumulative transfer at the end
        require(success, "The Withdrawal didn't go through");
        emit Withdraw(msg.sender, amountToWithdraw); //done :  msg.sender, amount are enough
    }
}