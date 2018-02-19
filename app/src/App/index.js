import React, { Component } from 'react'
import { FadeIn } from 'animate-components';

import Machines from '../common/factories/Machines'

import Header from '../Header'
import MachineList from '../MachineList'
import EmptyList from '../EmptyList'
import MachineDetail from '../MachineDetail'
import EmptyDetail from '../EmptyDetail'

/**
 * Application container, it fetches the machines and renders the header, list and detail
 */
class App extends Component {
  constructor() {
    super()

    this.state = {
      machines: [],
      machine: null,
      currentPage: 1,
      pageLimit: 5,
      isExtendedList: true,
      filter: ''
    }

    this.fetchMachines()

    this.setPage = this.setPage.bind(this)
    this.setFilter = this.setFilter.bind(this)
    this.setMachine = this.setMachine.bind(this)
    this.deactivateMachines = this.deactivateMachines.bind(this)
    this.toggleMachine = this.toggleMachine.bind(this)
    this.toggleListLayout = this.toggleListLayout.bind(this)
  }

  /**
   * Fetches the machine list from the server and stores the list of machines in the state
   */
  fetchMachines() {
    Machines.getAll()
      .then((machines) => this.setState({ machines }))
  }

  /**
   * Stores the given page on the state
   *
   * @param {number} currentPage - Page number
   */
  setPage(currentPage) {
    this.setState({ currentPage })
  }

  /**
   * Cleans the given filter replacing some characters for spaces and also removing all the blank
   * spaces from its starting or ending
   * If the filter to apply is not the one applied it stores the clean filter on the state and
   * changes the current page to the first one
   *
   * @param {number} currentPage - Page number
   */
  setFilter(filter) {
    let cleanFilter = filter.replace(/( |\\|\/|\+|\*|\.|\[|\])/g, '|').trim()

    if(cleanFilter !== this.state.filter) {
      this.setState({
        filter: cleanFilter
      })

      this.setPage(1)
    }
  }

  /**
   * Sets the status of all machines to inactive and also removes the machine stored on the state
   * of this component
   */
  setMachine(machine) {
    this.setState({ machine })
  }

  /**
   * Given an id, it fetches a machine detail from the server and stores it in the state
   *
   * @param {number} id - ID from the machine to fetch
   */
  fetchMachine(id) {
    Machines.getById(id)
      .then((machine => this.setMachine(machine)))
  }

  /**
   * Sets the status of all machines to inactive and also removes the machine stored on the state
   * of this component
   */
  deactivateMachines() {
    this.state.machines.forEach((machine) => {
      machine.active = false
    })
  }

  /**
   * Given a machine, if it status is active it sets it to inactive and removes the state stored
   * machine to empty the detail
   * If the status is inactive, it sets all machines to inactive, then actives this one and fetches
   * its detail
   *
   * @param {MachineListItem} - Machine to be toggled
   */
  toggleMachine(machine) {
    if(!machine.active) {
      this.deactivateMachines()

      machine.toggle()

      this.fetchMachine(machine.id)
    } else {
      machine.toggle()

      this.setMachine(null)
    }
  }

  /**
   * Toggles the list layout, extended or compacted
   * Also sets the page limit for the list depending on the layout and changes the page
   * accordingly
   */
  toggleListLayout() {
    let isExtended = !this.state.isExtendedList,
        currentPage = this.state.currentPage,
        limit = {
          extended: 5,
          compacted: 10
        }

    this.setState({
      isExtendedList: isExtended,
      pageLimit: isExtended ? limit.extended : limit.compacted,
      currentPage: isExtended ? currentPage * 2 - 1 : Math.ceil(currentPage / 2)
    })
  }

  /**
   * Filters the given machines with the specified filter (if any)
   *
   * @param {array} allMachines - List of MachineListItems to filter
   * @param {string} filter - Filter criteria
   *
   * @returns {array} - Filtered list of MachineListItems
   */
  getFilteredListMachines(allMachines, filter) {
    let machines = allMachines

    if(filter) {
      let regexpFilter = new RegExp(`(${ filter.replace(/ /g, '|') })`, 'gi')

      machines = machines.filter((machine) => machine.searchText.search(regexpFilter) >= 0)
    }

    return machines
  }

  /**
   * Calculates the last page given the amount of items and the page limit
   *
   * @param {number} total - Total of items to paginate
   * @param {number} pageLimit - Limit of items per page
   *
   * @returns {number} - Total number of pages
   */
  calcTotalPages(total, pageLimit) {
    return Math.ceil(total / pageLimit) || 1
  }

  /**
   * Gets the machines corresponding to the current page and limit from the filtered machines list
   *
   * @param {array} filteredMachines - Filtered list of MachineListItems
   + @param {number} currentPage - Page number
   + @param {numisEer} pageLimit - Page limit
   *
   * @param {array} - Sliced list of MachineListItems
   */
  getPageMachines(filteredMachines, currentPage, pageLimit) {
    return filteredMachines.slice((currentPage - 1) * pageLimit, currentPage * pageLimit)
  }

  render() {
    let {
          machines: allMachines,
          filter,
          currentPage,
          pageLimit,
          machine,
          isExtendedList
        } = this.state,
        filteredMachines = this.getFilteredListMachines(allMachines, filter),
        isListFiltered = !!filter,
        pagination = {
          currentPage: currentPage,
          lastPage: this.calcTotalPages(filteredMachines.length, pageLimit),
          setPage: this.setPage
        },
        pageMachines = this.getPageMachines(filteredMachines, currentPage, pageLimit)

    return (
      <FadeIn duration='.5s' timingFunction='ease-in'>
        <div className="container d-flex flex-column p-3">
          <Header
            setFilter={ this.setFilter }
            toggleListLayout={ this.toggleListLayout }
            isExtendedList={ isExtendedList }
          >
          </Header>
          {
            filteredMachines.length ?
            (
              <section className="row">
                <div className="col-lg-auto col-12">
                  <MachineList
                    machines={ pageMachines }
                    pagination={ pagination }
                    isExtended={ isExtendedList }
                    toggleMachine={ this.toggleMachine }
                  ></MachineList>
                </div>
                <div className={ `col flex-column border-left${ !machine ? ' d-none d-lg-block p-3' : '' }` }>
                  {
                    machine ?
                    (
                      <MachineDetail
                        machine={ machine }
                        setMachine={ this.setMachine }
                        deactivateMachines={ this.deactivateMachines }
                      ></MachineDetail>
                    ) :
                    (<EmptyDetail></EmptyDetail>)
                  }
                </div>
              </section>
            ) :
            (
              <EmptyList isFiltered={ isListFiltered }></EmptyList>
            )
          }
        </div>
      </FadeIn>
    )
  }
}

export default App
