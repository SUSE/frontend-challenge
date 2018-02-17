import React, { Component } from 'react'
import { FadeIn } from 'animate-components';

import Section from './Section'

/**
 * Machine detail component, it renders the item detail for the given machine
 */
class MachineDetail extends Component {
  render() {
    let {
          machine,
          setMachine,
          deactivateMachines
        } = this.props,
        sections = machine.getViewSections()

    return (
      <FadeIn duration='.5s' timingFunction='ease-in'>
        <article id="machine-detail" className="p-3">
          <button
            onClick={ () => {
              setMachine(null)
              deactivateMachines()
            } }
            className="btn btn-dark btn-sm float-right d-lg-none" type="button">
            ×
          </button>
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
      </FadeIn>
    )
  }
}

export default MachineDetail
