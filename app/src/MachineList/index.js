import React, { Component } from 'react'

import Item from './Item'

class MachineList extends Component {
  render() {
    return (
      <nav className="col-auto mw-50">
        <div className="list-group list-group-flush">
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </div>
      </nav>
    )
  }
}

export default MachineList
