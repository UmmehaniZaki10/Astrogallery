import { Stake, Withdraw } from '../generated/StakingABB/StakingABB'
import { StakingData, CurrentUserPosition} from '../generated/schema'
import { BigInt } from "@graphprotocol/graph-ts"

export function handleStake(event: Stake): void {
  let stakingData = new StakingData(event.transaction.hash)
  stakingData.account = event.params.account
  stakingData.amount = event.params.amount
  stakingData.solanaAddress = event.params.solanaAddress
  stakingData.lockUpPeriod = event.params.lockUpPeriod
  stakingData.unlockTime = event.params.unlockTime
  stakingData.stakingTime = event.params.currentTime
  stakingData.save()  
  const zero = new BigInt(0)

  let currentUserPosition = CurrentUserPosition.load(event.params.account)
  if (currentUserPosition == null) {
    let currentUserPosition = new CurrentUserPosition(event.params.account)
    currentUserPosition.stakedAmount =  event.params.amount
    currentUserPosition.claimedAmount = zero
    currentUserPosition.save()  
  } else {
    currentUserPosition.stakedAmount = currentUserPosition.stakedAmount.plus(event.params.amount) 
    currentUserPosition.save()
  }
}

export function handleWithdraw(event: Withdraw): void {
  const zero = new BigInt(0)
  let currentUserPosition = CurrentUserPosition.load(event.params.account)
  if (currentUserPosition != null) {
    currentUserPosition.stakedAmount = currentUserPosition.stakedAmount.minus(event.params.amount)
    currentUserPosition.claimedAmount = currentUserPosition.stakedAmount.plus(event.params.amount)
    currentUserPosition.save()  
  } 
}


// Query 1

// query StakingData {
//   stakingDatas {
//     id
//     lockUpPeriod
//     account
//     amount
//     solanaAddress
//     stakingTime
//     unlockTime
//   }
// }

// Query 2

// query CurrentUserPositions {
//   currentUserPositions {
//     id
//     stakedAmount
//     claimedAmount
//   }
// }