import React, { Component } from 'react'

class MachineDetailSectionItem extends Component {
  getClassName(item) {
    let classNames = 'font-weight-light'

    if(item.info) {
      classNames += ' text-info'
    } else {
      classNames += ' text-muted mr-2'
    }

    return classNames
  }

  generateValue(item) {
    return item.code ? (<code>{ item.code }</code>) : item.value
  }

  generateDescription(item) {
    return item.description ? (<small>({ item.description })</small>) : null
  }

  render() {
    let item = this.props.data

    return (
      <div>
        <span className={ this.getClassName(item) }>{ item.info || item.key }</span>&nbsp;
        { this.generateValue(item) } { this.generateDescription(item) }
      </div>
    )
  }
}

export default MachineDetailSectionItem
