import React, { Component } from 'react'

/**
 * Machine detail section list component, it renders the values within a list inside a section of
 * the item of a given machine detail
 */
class MachineDetailSectionList extends Component {
  render() {
    let {
          generateItems,
          list
        } = this.props

    return (
      <div className="col-auto mt-2">
        <h6>
          { list.name }
        </h6>
        { generateItems(list.items) }
      </div>
    )
  }
}

export default MachineDetailSectionList
