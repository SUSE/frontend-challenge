import React, { Component } from 'react'

import Item from './Item'
import Pagination from '../Pagination'

class MachineList extends Component {
  render() {
    let {
          machines,
          toggleMachine
        } = this.props,
        {
          currentPage,
          lastPage,
          setPage
        } = this.props.pagination

    return (
      <div id="machine-list">
        <nav className="list-group list-group-flush">
          {
            machines.map((machine) => (
              <Item
                key={ machine.id }
                machine={ machine }
                toggleMachine={ toggleMachine }
              ></Item>
            ))
          }
        </nav>
        <Pagination
          currentPage={ currentPage }
          lastPage={ lastPage }
          setPage={ setPage }
        ></Pagination>
      </div>
    )
  }
}

export default MachineList
