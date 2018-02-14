import React, { Component } from 'react'

/**
 * Machine detail section item component, it renders the content of a section with a specific
 * layout depending on the section structure
 */
class MachineDetailSectionItem extends Component {
  /**
   * Gets the class names for the section item depending on its properties
   *
   * @param {object} item - Section item
   *
   * @returns {string} - String with all the class names separated by spaces
   */
  getClassName(item) {
    let classNames = 'font-weight-light'

    if(item.info) {
      classNames += ' text-info'
    } else {
      classNames += ' text-muted mr-2'
    }

    return classNames
  }

  /**
   * Generates the content of the data part of the item
   *
   * @param {object} item - Section item
   *
   * @returns {ReactElement|string} - ReactElement with the value or string value
   */
  generateValue(item) {
    return item.code ? (<code>{ item.code }</code>) : item.value
  }

  /**
   * Generates the content of the description part of the item
   *
   * @param {object} item - Section item
   *
   * @returns {ReactElement|null} - ReactElement with the description or null
   */
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
