import React, { Component } from 'react'

/**
 * Machine list item component, it renders the item, with an expanded or collapsed layout
 * It also triggers a function when being clicked to fetch the details and mark the item as active
 * in the list
 */
class MachineListItem extends Component {
  /**
   * Generates a React DOM element depending on which is the most recent date (created or modified)
   *
   * @param {MachineListItem} machine - Machine object from which date has to be checked
   *
   * @returns {ReactElement} - Element with the creation or last modification date
   */
  generateCreatedOrModified(machine) {
    let key = 'Modified',
        date = machine.modified

    if(machine.created >= machine.modified) {
      key = 'Created'
      date = machine.created
    }

    return (
      <div className="col-auto pr-0">
        <span className="text-muted">{ key }</span> <span title={ date }>twelve days ago</span>
      </div>
    )
  }

  /**
   * Generates a React DOM element if the machine has the auto update enabled
   *
   * @param {MachineListItem} machine - Machine object from which the auto update has to be checked
   *
   * @returns {ReactElement|null} - Element warning that auto update is disabled or null
   */
  generateNoAutoUpdate(auto_update) {
    if(auto_update) {
      return null
    }

    return (
      <div className="col-auto">
        <span className="text-warning">No auto update</span>
      </div>
    )
  }

  /**
   * Generates a React DOM element with the extended content (os, kernel, created/modified, last
   * boot and auto update)
   *
   * @param {MachineListItem} machine - Machine object from which the auto update has to be checked
   *
   * @returns {ReactElement} - Element with all the extended content
   */
  generateExtendedContent(machine) {
    return (
      <div>
        <div className="row justify-content-start mb-1 font-weight-light">
          <div className="col-auto">
            <span className="text-muted font-weight-light">OS</span> { machine.os }
          </div>
          <div className="col-auto">
            <span className="text-muted font-weight-light">Kernel</span> { machine.kernel }
          </div>
        </div>
        <div className="row justify-content-start small font-weight-light">
          {
            this.generateCreatedOrModified(machine)
          }
          <div className="col-auto pr-0">
            <span className="text-muted">Running since</span>&nbsp;
            <span className="text-success" title={ machine.boot }>twelve days ago</span>
          </div>
          {
            this.generateNoAutoUpdate(machine.auto_update)
          }
        </div>
      </div>
    )
  }

  /**
   * Gets the classes required for the item which depends on the active status of the machine
   * on the list
   *
   * @param {boolean} active - Active status (on the list)
   *
   * @returns {string} - String with all the class names separated by spaces
   */
  getItemClassName(active) {
    let className = 'list-group-item list-group-item-action flex-column align-items-start p-3'

    if(active) {
      className += ' active'
    }

    return className
  }

  render() {
    let {
          machine,
          toggleMachine,
          isExtended
        } = this.props

    return (
      <button
        key={ machine.id }
        onClick={ () => toggleMachine(machine) }
        className={ this.getItemClassName(machine.active) }
        type="button"
      >
        <div className={ isExtended ? 'mb-2' : ''}>
          <h5 className="list-group-item-title font-weight-normal mb-0">
          { machine.name }
          </h5>
        </div>
        { isExtended ? this.generateExtendedContent(machine) : null }
      </button>
    )
  }
}

export default MachineListItem
