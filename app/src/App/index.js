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
  }

  fetchMachines() {
    Machines.getAll()
      .then((machines) => this.setState({ machines }))
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
        pageMachines = this.getPageMachines(machines, currentPage, pageLimit)

    return (
      <div className="container d-flex flex-column p-3">
        <Header></Header>
        <section className="row">
          <MachineList machines={ pageMachines }></MachineList>
          <MachineDetail></MachineDetail>
        </section>
      </div>
    )
  }
}

export default App
