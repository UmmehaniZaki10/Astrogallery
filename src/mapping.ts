import { Stake } from '../generated/StakingABB/StakingABB'
import { StakingData, ABB} from '../generated/schema'

export function handleStake(event: Stake): void {
  let stakingData = new StakingData(event.transaction.hash)
  stakingData.account = event.params.account
  stakingData.amount = event.params.amount
  stakingData.solanaAddress = event.params.solanaAddress
  stakingData.lockUpPeriod = event.params.lockUpPeriod
  stakingData.unlockTime = event.params.unlockTime
  stakingData.stakingTime = event.params.currentTime
  stakingData.save()  
}

export function handleApprove(event: Stake): void {
  let abbData = new ABB(event.transaction.hash)
  abbData.account = event.params.account
  abbData.save()  
}


// Query

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

