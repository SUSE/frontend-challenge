import React, { Component } from 'react'

/**
 * Header component, it renders the page title, the filter input and the list style checkbox
 */
class Header extends Component {
  render() {
    let {
          setFilter,
          toggleListLayout,
          isExtendedList
        } = this.props

     // mb only on md
    return (
      <header className="border-bottom p-3 mb-3">
        <h2 className="mb-3">
          Machine index
        </h2>
        <form>
          <div className="form-row h-100">
            <div className="form-group col-md-4 m-0">
              <input
                type="filter"
                className="form-control"
                id="filter"
                aria-describedby="filterHelp"
                placeholder="Filter results"
                onChange={ (e) => setFilter(e.target.value) }
              />
            </div>
            <div className="form-group col-md-4 my-auto">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="format"
                  checked={ isExtendedList }
                  onChange={ toggleListLayout }
                />
                <label className="form-check-label" htmlFor="format">
                  Show extended list
                </label>
              </div>
            </div>
          </div>
        </form>
      </header>
    )
  }
}

export default Header
