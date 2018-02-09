import React, { Component } from 'react'

class MachineListItem extends Component {
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
          toggleMachine
        } = this.props

    return (
      <button
        key={ machine.id }
        onClick={ () => toggleMachine(machine) }
        className={ this.getItemClassName(machine.active) }
        type="button"
      >
        <div>
          <h5 className="list-group-item-title font-weight-normal mb-0">
          { machine.name }
          </h5>
        </div>
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
      </button>
    )
  }
}

export default MachineListItem
