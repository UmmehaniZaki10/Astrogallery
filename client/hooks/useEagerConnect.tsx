import { useState, useEffect } from 'react'
import { network_config } from '../config'
declare var window: any

const useEagerConnect = () => {
  const [account, setAccount] = useState('')

  const connectWallet = async () => {
    try {
      const { ethereum } = window
      const env = 'testnet'
      if (ethereum) {
        ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [network_config[env]],
        })
      }
    } catch (error) {
      console.log('Error connecting to metamask', error)
    }
  }

  const checkCorrectNetwork = async () => {
    const { ethereum } = window
    let chainId = await ethereum.request({ method: 'eth_chainId' })
    console.log('Connected to chain:' + chainId)
    const env = 'testnet'

    if (chainId !== network_config[env]['chainId']) {
      connectWallet()
    }
  }
  // Checks if wallet is connected
  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window
    if (ethereum) {
      await checkCorrectNetwork()
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      if (accounts.length !== 0) {
        console.log('Found authorized Account: ', accounts[0])
        setAccount(accounts[0])
      } else {
        console.log('No authorized account found')
      }
    } else {
      console.log('No Wallet found. Connect Wallet')
    }
    return null
  }
  useEffect(() => {
    checkIfWalletIsConnected()
    if (window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        checkIfWalletIsConnected()
      })
      window.ethereum.on('accountsChanged', () => {
        checkIfWalletIsConnected()
      })
    }
  }, [])

  return { account, connectWallet }
}

export default useEagerConnect
