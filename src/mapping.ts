import { Stake } from '../generated/StakingABB/StakingABB'
import { StakingData} from '../generated/schema'
import { BigInt } from '@graphprotocol/graph-ts'


export function handleStake(event: Stake): void {

  let code = (Math.random() + 1).toString(36).substring(30);
  let stakingData = new StakingData(code)
  stakingData.address = event.params.account
  stakingData.amount = event.params.amount
  stakingData.solanaAddress = event.params.solanaAddress
  stakingData.save()  
}

// Query

// query StakingData {
//   stakingDatas {
//     address
//     amount
//   }
// }