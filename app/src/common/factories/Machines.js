import Request from '../helpers/Request';

import MachineListItem from '../models/MachineListItem';
import MachineDetail from '../models/MachineDetail';

class MachinesFactory {
  constructor() {
    this.url = 'http://localhost:3001/machines'
    this.machines = []
    this.machine = null
  }

  getAll() {
    return new Promise((resolve) => {
      Request.get(this.url)
        .then((response) => {
          this.machines = response[0].systems.map((data) => new MachineListItem(data))

          resolve(this.machines)
        })
    })
  }

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
