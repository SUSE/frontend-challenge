import React, { Component } from 'react'

class MachineList extends Component {
  render() {
    let isFiltered = this.props.isFiltered

    return (
      <div className="p-3 small text-muted text-center font-weight-light font-italic">
        There are no machines { isFiltered ? 'matching the filter' : '' }
      </div>
    )
  }
}

export default MachineList
