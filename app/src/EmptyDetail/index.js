import React, { Component } from 'react'

/**
 * Empty detail component, it renders a message telling the user that there is no selected machine
 */
class EmptyDetail extends Component {
  render() {
    return (
      <div className="small text-muted text-center font-weight-light font-italic">
        Select a machine to view its details
      </div>
    )
  }
}

export default EmptyDetail
