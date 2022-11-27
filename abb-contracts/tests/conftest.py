#!/usr/bin/python3

import time
from enum import IntEnum

import pytest


@pytest.fixture(scope="module")
def contracts(accounts, AstroToken, TokenX, StakingABB):

    tokenX = TokenX.deploy({"from": accounts[1]})
    # tokenX = AstroToken.deploy({"from": accounts[1]})
    # tokenX.transfer(accounts[0], 5e18)
    # tokenX.enableTrading({"from": accounts[1]})
    # print(astro)
    staking_contract = StakingABB.deploy(tokenX.address, {"from": accounts[0]})

    return {
        "tokenX": tokenX,
        "staking_contract": staking_contract,
    }
