import React, { Component } from 'react'

import Item from './Item'

class MachineList extends Component {
  render() {
    let {
          machines,
        } = this.props

    return (
      <nav className="col-auto mw-50">
        <div className="list-group list-group-flush">
          {
            machines.map((machine) => (
              <Item
                key={ machine.id }
                machine={ machine }
              ></Item>
            ))
          }
        </div>
      </nav>
    )
  }
}

export default MachineList
