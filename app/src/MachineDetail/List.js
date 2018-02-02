import React, { Component } from 'react'

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
