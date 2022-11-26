import { useState, useEffect } from 'react'
import { ABBContractAddress } from '../config.js'
import { ethers } from 'ethers'
import axios from 'axios'
import useABBContract from '../hooks/useContract'
import useEagerConnect from '../hooks/useEagerConnect'
import ABB from '../utils/ABB.json'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

declare var window: any
const ONE_DAY = 86400

const mint = () => {
  const [duration, setDuration] = useState<Number | null>(null)
  const [stakingAmount, setStakingAmount] = useState<Number>()
  const [solanaAddress, setSolanaAddress] = useState<String>('')
  const [loadingState, setLoadingState] = useState(0)
  const [txError, setTxError] = useState()
  const [action, setAction] = useState(null)

  const { account, connectWallet } = useEagerConnect()
  // const ABBContract = useABBContract()

  const performAction = async (action: string) => {
    switch (action) {
      case 'stake':
        if (!solanaAddress || !stakingAmount || !duration) {
          toast.error('Please provide all the details!')
        }
        console.log('stake', { action, stakingAmount, duration, solanaAddress })
        return
      case 'redeem':
        console.log('redeem', {
          action,
          stakingAmount,
          duration,
          solanaAddress,
        })
        return

      // default:
      //   return notify()
    }
  }
  useEffect(() => {
    console.log(account)
    // if (account) getStats()
  }, [account])

  return (
    <div className="container">
      {/* {account} */}
      <div className="head">Stake ABB</div>
      <div className="flex-sb pd cw-1 rd m-auto shadow">
        <div>
          <div className="txt-1 ">Available to stake</div>
          <div className="txt-2 ">{account ? '1000 ABB' : '-'}</div>
        </div>
        <div>
          <div className="txt-1 ">Accured Rewards</div>
          <div className="txt-2 ">{account ? '1000 ABB' : '-'}</div>
        </div>
      </div>
      <div className="pd cw-1 rd m-auto flex-col shadow">
        <div className="material-textfield flex-col">
          <label className="txt-1 ">Duration of staking</label>
          <div className="flex-sb">
            <a
              className={`btn-2 ${duration == 30 * ONE_DAY && 'btn-2-clicked'}`}
              onClick={() => setDuration(30 * ONE_DAY)}
            >
              <span>30 days</span>
            </a>
            <a
              className={`btn-2 ${duration == 60 * ONE_DAY && 'btn-2-clicked'}`}
              onClick={() => setDuration(60 * ONE_DAY)}
            >
              {' '}
              <span>60 days</span>
            </a>
            <a
              className={`btn-2 ${duration == 90 * ONE_DAY && 'btn-2-clicked'}`}
              onClick={() => setDuration(90 * ONE_DAY)}
            >
              {' '}
              <span>90 days</span>
            </a>
          </div>
        </div>

        <div className="material-textfield flex-col">
          <label className="txt-1 ">Stake Amount</label>
          <input
            placeholder=""
            className="txt-2 "
            type="number"
            onChange={(e) => setStakingAmount(parseFloat(e.target.value))}
            value={stakingAmount}
          />
        </div>
        <div className="material-textfield flex-col">
          <label className="txt-1 ">Solana address</label>
          <input
            placeholder=" "
            className="txt-2 "
            type="text"
            onChange={(e) => setSolanaAddress(e.target.value)}
            value={solanaAddress}
          />
        </div>
        {stakingAmount && duration ? (
          <label className="txt-1 txt-center">
            You will get <span className="highlight">100 ABB</span>
          </label>
        ) : null}

        {account ? (
          <>
            <a className="btn" href="#" onClick={() => performAction('stake')}>
              <span>Stake ABB</span>
            </a>
            <a className="btn" href="#" onClick={() => performAction('redeem')}>
              <span>Redeem 100 ABB</span>
              <ToastContainer />
            </a>
          </>
        ) : (
          <a className="btn" href="#" onClick={connectWallet}>
            <span>Connect Wallet</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default mint
