import React, { Component } from 'react'
import { FadeIn } from 'animate-components';

import Item from './Item'
import Pagination from '../Pagination'

/**
 * Machine list component, it renders the list items for each of the given machines and also the
 * pagination
 */
class MachineList extends Component {
  render() {
    let {
          machines,
          toggleMachine,
          isExtended
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
              <FadeIn duration='.5s' timingFunction='ease-in'>
                <Item
                  key={ machine.id }
                  machine={ machine }
                  isExtended={ isExtended }
                  toggleMachine={ toggleMachine }
                ></Item>
              </FadeIn>
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
