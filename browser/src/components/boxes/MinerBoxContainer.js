import React from 'react'
import PropTypes from 'prop-types'
import im from 'immutable'

import { connect } from '../../store'
import Toggle from '../Toggle'
import './Box.css'


class MinerBoxContainer extends React.Component {
  static getState(state) {
    return {
      miner: state.get('miner')
    }
  }

  static getActions(actions) {
    return {
      fetchMinerInfo: actions.fetchMinerInfo,
      startMining   : actions.startMining,
      stopMining    : actions.stopMining
    }
  }

  static propTypes = {
    miner  : PropTypes.instanceOf(im.Map).isRequired,
    actions: PropTypes.object
  };

  componentWillMount() {
    this.props.actions.fetchMinerInfo()
  }

  onRunningChange(event) {
    const action = {
      true: this.props.actions.startMining,
      false: this.props.actions.stopMining
    }[event.target.checked]

    return action()
  }

  render() {
    const miner = this.props.miner

    return <div className="Box miner">
      <h2>Miner</h2>

      <div>
        <div>Address: { miner.get('address') }</div>
        <br />
        <Toggle active={ miner.get('running') } onChange={ this.onRunningChange.bind(this) } />
      </div>
    </div>
  }
}


export default connect(MinerBoxContainer)
