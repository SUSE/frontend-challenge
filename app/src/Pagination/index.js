import React, { Component } from 'react'

/**
 * Machine list pagination component, it renders the pagination, handles the button status and
 * contains the navigation logic
 */
class Pagination extends Component {
  constructor() {
    super()

    this.setFirstPage = this.setFirstPage.bind(this)
    this.setPreviousPage = this.setPreviousPage.bind(this)
    this.setNextPage = this.setNextPage.bind(this)
    this.setLastPage = this.setLastPage.bind(this)
  }

  /**
   * Checks if the given page is the first one
   *
   * @param {number} page - Current page number
   *
   * @returns boolean - True if it is, false if not
   */
  isFirstPage(page) {
    return page === 1
  }

  /**
   * Checks if the given page is the last one
   *
   * @param {number} page - Current page number
   * @param {number} last - Last page number
   *
   * @returns boolean - True if it is, false if not
   */
  isLastPage(page, last) {
    return page === last
  }

  /**
   * Changes the current page to the first one except if we already are in the first page
   *
   * @returns undefined
   */
  setFirstPage() {
    if(this.props.currentPage > 1) {
      this.props.setPage(1)
    }
  }

  /**
   * Changes the current page to the previous one except if we are in the first page
   *
   * @returns undefined
   */
  setPreviousPage() {
    let current = this.props.currentPage

    if(current > 1) {
      this.props.setPage(current - 1)
    }
  }

  /**
   * Changes the current page to the next one except if we are in the last page
   *
   * @returns undefined
   */
  setNextPage() {
    let current = this.props.currentPage

    if(current < this.props.lastPage) {
      this.props.setPage(current + 1)
    }
  }

  /**
   * Changes the current page to the last one except if we already are in the last page
   *
   * @returns undefined
   */
  setLastPage() {
    let last = this.props.lastPage

    if(this.props.currentPage < last) {
      this.props.setPage(last)
    }
  }

  render() {
    let {
          currentPage: current,
          lastPage: last
        } = this.props

    return (
      <div id="pagination" className="px-3 py-2">
        <div className="row no-gutters">
          <div className="col">
            <button type="button" className="btn btn-link rounded-0 text-secondary" onClick={ this.setFirstPage } disabled={ this.isFirstPage(current) } aria-disabled={ this.isFirstPage(current) }>
              ≪ First
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-link rounded-0 text-secondary" onClick={ this.setPreviousPage } disabled={ this.isFirstPage(current) } aria-disabled={ this.isFirstPage(current) }>
              { `<` } Previous
            </button>
          </div>
          <div className="col text-center text-secondary p-2">
            { current } / { last }
          </div>
          <div className="col">
            <button type="button" className="btn btn-link rounded-0 text-secondary" onClick={ this.setNextPage } disabled={ this.isLastPage(current, last) } aria-disabled={ this.isLastPage(current, last) }>
              Next {` > `}
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-link rounded-0 text-secondary" onClick={ this.setLastPage } disabled={ this.isLastPage(current, last) } aria-disabled={ this.isLastPage(current, last) }>
              Last ≫
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Pagination
