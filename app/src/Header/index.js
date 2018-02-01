import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="border-bottom p-3 mb-3">
        <h2 className="mb-3">
          Machine index
        </h2>
        <form>
          <div className="form-row">
            <div className="form-group col-md-4 m-0">
              <input type="filter" className="form-control" id="filter" aria-describedby="filterHelp" placeholder="Filter results"/>
              <small id="filterHelp" className="form-text text-muted">You can filter even by not visible fields.</small>
            </div>
          </div>
        </form>
      </header>
    )
  }
}

export default Header
