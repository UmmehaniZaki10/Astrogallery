// SPDX-License-Identifier: BUSL-1.1

pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenX is ERC20("TokenX", "TokenX") {
    constructor() {
        uint256 INITIAL_SUPPLY = 100 * 10**6 * 10**decimals();
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
