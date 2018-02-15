import Request from '../helpers/Request';

import MachineListItem from '../models/MachineListItem';
import MachineDetail from '../models/MachineDetail';

/**
 * Machines factory that generates MachineDetail and MachineListItem models with the returned data
 * from the server
 */
class MachinesFactory {
  constructor() {
    this.url = 'http://192.168.1.107:3001/machines'
    this.machines = []
    this.machine = null
  }

  /**
   * Gets all the machines from the server using the Request helper, it models the result with
   * MachineListItem models and returns them
   *
   * @returns {Promise} - Promise that will be resolved if the machines are successfully obtained
   */
  getAll() {
    return new Promise((resolve) => {
      Request.get(this.url)
        .then((response) => {
          this.machines = response[0].systems.map((data) => new MachineListItem(data))

          resolve(this.machines)
        })
    })
  }

  /**
   * Gets a machine, given the provided ID, from the server using the Request helper, it models the
   * result with MachineDetail model and returns it
   *
   * @param id {number} - ID of the machine to get
   *
   * @returns {Promise} - Promise that will be resolved if the machine is successfully obtained
   */
  getById(id) {
    return new Promise((resolve) => {
      Request.get(`${ this.url }/${ id }`)
        .then((response) => {
          let key = Object.keys(response.return[0])[0]
          this.machine = new MachineDetail(response.return[0][key])

          resolve(this.machine)
        })
    })
  }
}

let instance = new MachinesFactory()

export default instance
