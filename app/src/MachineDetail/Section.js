import React, { Component } from 'react'

import Item from './Item'
import List from './List'

class MachineDetailSection extends Component {
  generateItems(items) {
    return items.map((item, index) => {
      return (<Item key={ index } data={ item }></Item>)
    })
  }

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
