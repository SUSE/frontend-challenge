import React, { Component } from 'react'

class MachineListItem extends Component {
  render() {
    return (
      <a href="#" className="list-group-item list-group-item-action flex-column align-items-start p-3">
        <div className="mb-2">
          <h5 className="list-group-item-title font-weight-normal mb-0">
          suma-ref31-cli-sles12sp3-1
          </h5>
        </div>
        <div className="row justify-content-start mb-1 font-weight-light">
          <div className="col-auto">
            <span className="text-muted font-weight-light">OS</span> sles-release 12.3
          </div>
          <div className="col-auto">
            <span className="text-muted font-weight-light">Kernel</span> 4.4.73-5-default
          </div>
        </div>
        <div className="row justify-content-start small font-weight-light">
          <div className="col-auto pr-0">
            <span className="text-muted">Created</span> <span title="24/01/2018 14:30:57">twelve days ago</span>
          </div>
          <div className="col-auto pr-0">
            <span className="text-muted">Running since</span> <span className="text-success" title="24/01/2018 14:30:57">twelve days ago</span>
          </div>
          <div className="col-auto">
            <span className="text-warning">No auto update</span>
          </div>
        </div>
      </a>
    )
  }
}

export default MachineListItem
