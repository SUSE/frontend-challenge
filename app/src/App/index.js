import React, { Component } from 'react'
import './index.css'

import Machines from '../common/factories/Machines'

import Header from '../Header'
import MachineList from '../MachineList'
import MachineDetail from '../MachineDetail'

class App extends Component {
  constructor() {
    super()

    this.state = {
      machines: [],
      currentPage: 1,
      pageLimit: 5,
      filter: ''
    }

    this.fetchMachines()

    this.setPage = this.setPage.bind(this)
    this.setFilter = this.setFilter.bind(this)
  }

  fetchMachines() {
    Machines.getAll()
      .then((machines) => this.setState({ machines }))
  }

  setPage(currentPage) {
    this.setState({ currentPage })
  }

  setFilter(filter) {
    let cleanFilter = filter.replace(/( |\\|\/|\+|\*|\.|\[|\])/g, '|').trim()

    if(cleanFilter !== this.state.filter) {
      this.setState({
        filter: cleanFilter
      })

      this.setPage(1)
    }
  }

  getFilteredListMachines(allMachines, filter) {
    let machines = allMachines

    if(filter) {
      let regexpFilter = new RegExp(`(${ filter.replace(/ /g, '|') })`, 'gi')

      machines = machines.filter((machine) => machine.searchText.search(regexpFilter) >= 0)
    }

    return machines
  }

  calcTotalPages(total, pageLimit) {
    return Math.ceil(total / pageLimit) || 1
  }

  getPageMachines(filteredMachines, currentPage, pageLimit) {
    return filteredMachines.slice((currentPage - 1) * pageLimit, currentPage * pageLimit)
  }

  render() {
    let {
          machines: allMachines,
          filter,
          currentPage,
          pageLimit
        } = this.state,
        filteredMachines = this.getFilteredListMachines(allMachines, filter),
        pagination = {
          currentPage: currentPage,
          lastPage: this.calcTotalPages(filteredMachines.length, pageLimit),
          setPage: this.setPage
        },
        pageMachines = this.getPageMachines(filteredMachines, currentPage, pageLimit)

    return (
      <div className="container d-flex flex-column p-3">
        <Header setFilter={ this.setFilter }></Header>
        <section className="row">
          <div className="col-auto">
            <MachineList
              pagination={ pagination }
              machines={ pageMachines }
            ></MachineList>
          </div>
          <div>
            <MachineDetail></MachineDetail>
          </div>
        </section>
      </div>
    )
  }
}

export default App
