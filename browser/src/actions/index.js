import * as types from './action-types'


// ------------------------------------------
// MINER

export const fetchMinerInfo = () => {
  return {
    type: types.MINER_INFO.REQUESTED
  }
}

export const startMining = () => {
  return {
    type: types.UPDATE_MINING.REQUESTED,
    running: true
  }
}

export const stopMining = () => {
  return {
    type: types.UPDATE_MINING.REQUESTED,
    running: false
  }
}

// ------------------------------------------
// BLOCKCHAIN

export const fetchBlockchainInfo = () => {
  return {
    type: types.BLOCKCHAIN_INFO.REQUESTED
  }
}
