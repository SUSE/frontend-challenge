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
      pageLimit: 5
    }

    this.fetchMachines()

    this.setPage = this.setPage.bind(this)
  }

  fetchMachines() {
    Machines.getAll()
      .then((machines) => this.setState({ machines }))
  }

  setPage(currentPage) {
    this.setState({ currentPage })
  }

  calcTotalPages(total, pageLimit) {
    return Math.ceil(total / pageLimit) || 1
  }

  getPageMachines(machines, currentPage, pageLimit) {
    return machines.slice((currentPage - 1) * pageLimit, currentPage * pageLimit)
  }

  render() {
    let {
          machines,
          currentPage,
          pageLimit
        } = this.state,
        pageMachines = this.getPageMachines(machines, currentPage, pageLimit),
        pagination = {
          currentPage: currentPage,
          lastPage: this.calcTotalPages(machines.length, pageLimit),
          setPage: this.setPage
        }

    return (
      <div className="container d-flex flex-column p-3">
        <Header></Header>
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
