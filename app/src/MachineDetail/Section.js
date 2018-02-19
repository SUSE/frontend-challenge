import React, { Component } from 'react'

import Item from './Item'
import List from './List'

/**
 * Machine detail section component, it renders a section of the given machine detail
 */
class MachineDetailSection extends Component {
  /**
   * Generates the items from the section
   *
   * @param {object} item - Section items
   *
   * @returns {ReactElement} - ReactElement for each of the section items
   */
  generateItems(items) {
    return items.map((item, index) => {
      return (<Item key={ index } data={ item }></Item>)
    })
  }

  /**
   * Generates the lists from the section (if any)
   *
   * @param {object|undefined} item - Section list
   *
   * @returns {ReactElement|null} - ReactElement for each of the section lists or null if no lists
   */
  generateLists(list) {
    if(!list || !list.length) {
      return null
    }

    let lists = list.map((items, index) => {
      return (<List key={ index } list={ items } generateItems={ this.generateItems }></List>)
    })

    return (
      <div className="row justify-content-start">{ lists }</div>
    )
  }

  render() {
    let section = this.props.section

    return (
      <section className="mb-4">
        <h5>
          { section.name }
        </h5>
        { this.generateItems(section.items) }
        { this.generateLists(section.list) }
      </section>
    )
  }
}

export default MachineDetailSection
