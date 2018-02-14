import React, { Component } from 'react'

import Section from './Section'

/**
 * Machine detail component, it renders the item detail for the given machine
 */
class MachineDetail extends Component {
  render() {
    let machine = this.props.machine,
        sections = machine.getViewSections()

    return (
      <article>
        <header>
          <h4 className="card-title font-weight-normal mb-4">
            <span title="Machine Name">{ machine.name }</span>&nbsp;
            <span className="small">
              (
                <span
                  className="font-weight-light text-muted"
                  title="Machine ID"
                >{ machine.public_id }</span>
              )
            </span>
          </h4>
        </header>
        {sections.map((section, index) => {
          return <Section key={ index } section={ section }></Section>
        })}
      </article>
    )
  }
}

export default MachineDetail
