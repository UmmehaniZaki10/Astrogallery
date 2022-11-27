from math import isclose

import brownie


def test_abb_staking(contracts, accounts, chain):

    tokenX = contracts["tokenX"]
    bfr_deployer = accounts[1]
    staking_contract = contracts["staking_contract"]
    user_1 = accounts[2]
    user_2 = accounts[3]
    user_3 = accounts[4]
    user_4 = accounts[5]
    ONE_DAY = 86400
    transfer_amount = 100000 * int(1e18)
    amount_1 = 100 * int(1e18)
    solana_address = "string"
    apy = {
        "30": 0.05,
        "60": 0.1,
        "90": 0.15
    }

    def traverse(account):
        index = staking_contract.stakeDetailPerUser(account)[1]
        all_stakings = staking_contract.getUserStakedAmounts(account)
        print('start', index, all_stakings)
        while (index < len(all_stakings)):
            print(index, end=' => ')
            index = all_stakings[index][4]
        print('end')

    def test_all_reward_calculations():
        lock_up_period = 30
        assert (
            staking_contract.calculateReward(
                1000 * 1e18, lock_up_period) / 1e18
        ) == 4.109589041095891
        lock_up_period = 60
        assert (
            staking_contract.calculateReward(
                1000 * 1e18, lock_up_period) / 1e18
        ) == 16.438356164383563
        lock_up_period = 90
        assert (
            staking_contract.calculateReward(
                1000 * 1e18, lock_up_period) / 1e18
        ) == 36.986301369863014

    def test_user_flow_pre_staking():
        # assert staking_contract.calculateUserReward(user_1) == 0
        assert staking_contract.totalStakedAmount() == 0
        assert staking_contract.claimableTokens(user_1) == 0
        assert tokenX.balanceOf(
            staking_contract.address
        ) == 0
        assert tokenX.balanceOf(user_1) == 0

    def test_initital_set_up(amount_to_stake, user):
        lock_up_period = 30
        assert tokenX.balanceOf(user) == 0
        initial_deployer_balance = tokenX.balanceOf(bfr_deployer)

        with brownie.reverts(""):  # ERC20: transfer amount exceeds balance
            staking_contract.stake(
                amount_to_stake, lock_up_period, solana_address, {
                    "from": user}
            )
        tokenX.transfer(user, amount_to_stake, {"from": bfr_deployer})
        initial_tokenX_balance_user_1 = tokenX.balanceOf(user)
        assert tokenX.balanceOf(user) == amount_to_stake
        assert tokenX.balanceOf(
            bfr_deployer) == initial_deployer_balance - amount_to_stake

        assert initial_tokenX_balance_user_1 == amount_to_stake
        with brownie.reverts(''):  # "ERC20: transfer amount exceeds allowance"
            staking_contract.stake(
                amount_to_stake, lock_up_period, solana_address, {
                    "from": user}
            )
        tokenX.approve(staking_contract.address,
                       amount_to_stake, {"from": user})

    def test_staking_flow(lock_up_period, amount_to_stake, user):
        initial_tokenX_balance_of_staking_contract = tokenX.balanceOf(
            staking_contract.address
        )
        initial_total_staked_amount = staking_contract.totalStakedAmount()
        stake_transaction = staking_contract.stake(
            amount_to_stake, lock_up_period, solana_address, {"from": user}
        )

        assert tokenX.balanceOf(
            staking_contract.address) == initial_tokenX_balance_of_staking_contract+amount_to_stake
        assert staking_contract.totalStakedAmount() == initial_total_staked_amount + \
            amount_to_stake

        assert stake_transaction.events["Stake"]["account"] == user
        assert stake_transaction.events["Stake"]["amount"] == amount_to_stake
        assert stake_transaction.events["Stake"]["lockUpPeriod"] == lock_up_period
        assert stake_transaction.events["Stake"]["solanaAddress"] == solana_address

    def test_rewards(lock_up_period, amount_to_stake, user):
        chain.snapshot()
        assert (
            staking_contract.calculateUserReward(user) == 0
        ), "Wrong user reward"
        chain.sleep(int(lock_up_period/2) * ONE_DAY)
        chain.mine(2)
        assert isclose(
            staking_contract.calculateUserReward(user),
            (apy[str(lock_up_period)] * amount_to_stake * lock_up_period/2) / 365,
            abs_tol=10,
        )
        chain.sleep(lock_up_period * ONE_DAY)
        chain.mine(2)
        assert isclose(
            staking_contract.calculateUserReward(user),
            (apy[str(lock_up_period)] * amount_to_stake * lock_up_period) / 365,
            abs_tol=10,
        )
        chain.sleep((lock_up_period+35) * ONE_DAY)
        chain.mine(2)
        assert isclose(
            staking_contract.calculateUserReward(user),
            (apy[str(lock_up_period)] * amount_to_stake * lock_up_period) / 365,
            abs_tol=10,
        )
        chain.revert()

    def test_claimable_tokens(amount_to_stake, user):
        chain.snapshot()
        assert (
            staking_contract.claimableTokens(user) == 0
        ), "Incorrect claimable tokens"
        chain.sleep(15 * ONE_DAY)
        chain.mine(2)
        assert (
            staking_contract.claimableTokens(user) == 0
        ), "Incorrect claimable tokens"
        chain.sleep(30 * ONE_DAY)
        chain.mine(2)
        assert (
            staking_contract.claimableTokens(user) == amount_to_stake
        ), "Incorrect claimable tokens"
        chain.sleep(95 * ONE_DAY)
        chain.mine(2)
        assert (
            staking_contract.claimableTokens(user) == amount_to_stake
        ), "Incorrect claimable tokens"
        chain.revert()

    def test_withdraw_flow(lock_up_period, amount, user):
        # Withdraw before lock up period
        initial_tokenX_balance_of_staking_contract = tokenX.balanceOf(
            staking_contract.address
        )
        initial_total_staked_amount = staking_contract.totalStakedAmount()
        initial_user_balance = tokenX.balanceOf(user)
        claimable_tokens = staking_contract.claimableTokens(user)
        withdraw_transaction = staking_contract.withdraw(
            {"from": user}
        )
        assert tokenX.balanceOf(user) == initial_user_balance
        assert claimable_tokens == 0
        assert tokenX.balanceOf(
            staking_contract.address) == initial_tokenX_balance_of_staking_contract
        assert staking_contract.totalStakedAmount() == initial_total_staked_amount

        # Withdraw after lock up period
        chain.sleep(lock_up_period * ONE_DAY)
        chain.mine(2)
        initial_tokenX_balance_of_staking_contract = tokenX.balanceOf(
            staking_contract.address
        )
        initial_total_staked_amount = staking_contract.totalStakedAmount()
        initial_user_balance = tokenX.balanceOf(user)
        claimable_tokens = staking_contract.claimableTokens(user)
        user_reward = staking_contract.calculateUserReward(user_1)
        withdraw_transaction = staking_contract.withdraw(
            {"from": user}
        )
        # assert tokenX.balanceOf(user) == initial_user_balance + amount
        assert claimable_tokens == amount
        assert tokenX.balanceOf(
            staking_contract.address) == initial_tokenX_balance_of_staking_contract - amount
        assert staking_contract.totalStakedAmount() == initial_total_staked_amount - amount
        assert withdraw_transaction.events["Withdraw"]["account"] == user
        assert withdraw_transaction.events["Withdraw"]["amount"] == amount
        assert (
            staking_contract.claimableTokens(user) == 0
        ), "Incorrect claimable tokens"
        assert staking_contract.calculateUserReward(user_1) == user_reward

    # Flow before staking
    test_all_reward_calculations()
    test_user_flow_pre_staking()

    # FLOW 1 : USER WITH ONE STAKES, WITHDRAWS THE STAKE AMOUNT
    lock_up_period = 30
    chain.snapshot()
    test_initital_set_up(transfer_amount, user_1)
    test_staking_flow(lock_up_period, amount_1, user_1)
    test_rewards(lock_up_period, amount_1, user_1)
    test_claimable_tokens(amount_1, user_1)
    traverse(user_1)
    user_reward = staking_contract.calculateUserReward(user_1)
    test_withdraw_flow(lock_up_period, amount_1, user_1)
    traverse(user_1)
    # Additional Checks
    assert isclose(
        staking_contract.calculateUserReward(user_1),
        user_reward + (apy[str(lock_up_period)] *
                       amount_1 * lock_up_period) / 365,
        abs_tol=10,
    )
    chain.sleep(int(lock_up_period) * ONE_DAY)
    chain.mine(2)
    assert isclose(
        staking_contract.calculateUserReward(user_1),
        user_reward + (apy[str(lock_up_period)] *
                       amount_1 * lock_up_period) / 365,
        abs_tol=10,
    )
    chain.sleep(lock_up_period * ONE_DAY)
    chain.mine(2)
    assert (
        staking_contract.claimableTokens(user_1) == 0
    ), "Incorrect claimable tokens"
    chain.revert()

    # FLOW 2 : USER WITH MULTIPLE STAKES, WITHDRAWS THE FIRST STAKE AMOUNT
    lock_up_period = 30
    test_initital_set_up(transfer_amount, user_2)
    test_staking_flow(lock_up_period, amount_1, user_2)
    test_rewards(lock_up_period, amount_1, user_2)
    test_claimable_tokens(amount_1, user_2)
    test_staking_flow(60, amount_1, user_2)
    test_staking_flow(60, amount_1, user_2)
    test_staking_flow(90, amount_1, user_2)
    traverse(user_2)
    test_withdraw_flow(lock_up_period, amount_1, user_2)
    traverse(user_2)

    # FLOW 3 : USER WITH MULTIPLE STAKES, WITHDRAWS THE FIRST 2 STAKE AMOUNTS
    lock_up_period = 30
    test_initital_set_up(transfer_amount, user_3)
    test_staking_flow(lock_up_period, amount_1, user_3)
    test_rewards(lock_up_period, amount_1, user_3)
    test_claimable_tokens(amount_1, user_3)
    test_staking_flow(30, amount_1, user_3)
    test_staking_flow(60, amount_1, user_3)
    test_staking_flow(90, amount_1, user_3)
    traverse(user_3)
    test_withdraw_flow(lock_up_period, amount_1*2, user_3)
    traverse(user_3)

    # FLOW 4 : USER WITH ONE STAKE, WITHDRAWS THE LAST STAKE AMOUNT
    lock_up_period = 90
    test_initital_set_up(transfer_amount, user_4)
    test_staking_flow(lock_up_period, amount_1, user_4)
    test_rewards(lock_up_period, amount_1, user_4)
    # test_claimable_tokens(amount_1, user_4)
    test_staking_flow(90, amount_1, user_4)
    test_staking_flow(90, amount_1, user_4)
    test_staking_flow(30, amount_1, user_4)
    traverse(user_4)
    test_withdraw_flow(30, amount_1, user_4)
    traverse(user_4)
