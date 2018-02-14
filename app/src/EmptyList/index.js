import React, { Component } from 'react'

/**
 * Empty list component, it renders a message telling the user that there are no machines
 * The message changes if there is a filter applied
 */
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
