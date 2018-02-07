class MachineListItem {
  constructor(data) {
      this.id = data.id
      this.name = data.name
      this.os = `${ data.os } ${ data.release }`
      this.autoUpdate = data.auto_update === 'Y' ? true : false
      this.kernel = data.running_kernel
      this.boot = new Date(data.last_boot)
      this.created = new Date(data.created)
      this.modified = new Date(data.modified)

      this.searchText = this.getSearchText(data)
  }

  getSearchText(data) {
    return [data.description, data.kernel, data.name].join(' ')
  }
}

export default MachineListItem
