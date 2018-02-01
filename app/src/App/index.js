import React, { Component } from 'react'
import './index.css'

import Header from '../Header'
import MachineList from '../MachineList'
import MachineDetail from '../MachineDetail'

class App extends Component {
  render() {
    return (
      <div className="container d-flex flex-column p-3">
        <Header></Header>
        <section className="row">
          <MachineList></MachineList>
          <MachineDetail></MachineDetail>
        </section>
      </div>
    )
  }
}

export default App
