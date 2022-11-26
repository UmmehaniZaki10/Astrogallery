import { useState, useEffect } from 'react'
import { ABBContractAddress } from '../config.js'
import { ethers } from 'ethers'
import ABB from '../utils/ABB.json'

declare var window: any

const useABBContract = () => {
  if (window) {
    const { ethereum } = window
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    return new ethers.Contract(ABBContractAddress, ABB, signer)
  }
}
// export const useStakingContract = () => {
//   const { ethereum } = window
//   const provider = new ethers.providers.Web3Provider(ethereum)
//   const signer = provider.getSigner()
//   return new ethers.Contract(ABBContractAddress, ABB, signer)
// }
export default useABBContract

// const getStats = async () => {
//     // try {
//     const { ethereum } = window

//     if (ethereum) {
//       const provider = new ethers.providers.Web3Provider(ethereum)
//       const signer = provider.getSigner()
//       const ABBContract = new ethers.Contract(ABBContractAddress, ABB, signer)
//       console.log(ethers.utils.getAddress(account))
//       let allowance = await ABBContract.allowance(
//         ethers.utils.getAddress(account),
//         ABBContractAddress
//       )
//       console.log('Mining....', ethers.utils.formatEther(allowance))

//       // ABBContract.approve(ABBContractAddress, '5000000000000000000')
//       // setMiningStatus(0)

//       // let tx = await nftTx.wait()
//       // setLoadingState(1)
//       // console.log('Mined!', tx)
//       // let event = tx.events[0]
//       // let value = event.args[2]
//       // let tokenId = value.toNumber()

//       // console.log(
//       //   `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTx.hash}`
//       // )

//       // getMintedNFT(tokenId)
//     } else {
//       console.log("Ethereum object doesn't exist!")
//     }
//     // } catch (error) {
//     //   console.log('Error minting character', error)
//     //   setTxError(error.message)
//     // }
//   }
