export const ETHER_ADDRESS = '0x0000000000000000000000000000000000000000'
export const RED = 'danger'
export const GREEN = 'success'
export const DECIMALS = (10**18)

// Shortcut to avoid passing around web3 connection

export const ether = (wei) => {
  if(wei) {
      return(wei/DECIMALS) // 18 decimal places
  }
}

// Tokens and ether have same decimal resolution
export const tokens = ether

export const formatBalance = (balance) => {
  balance = ether(balance)
  balance = Math.round(balance * 100) / 100 // Use 2 decimal places 
  return balance
}