/**
 * Helper that given a server machine list item it modelates it to suit the app needs
 */
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

      this.active = false
  }

  /**
   * Concatenates all the items that should be searchable for the user to create a searchable
   * string
   *
   * @param data {object} - Server-provided machine list item data
   *
   * @returns {string} - String with machine list item properties that will be used to filter
   *                     this machine
   */
  getSearchText(data) {
    return [data.description, data.kernel, data.name].join(' ').trim()
  }

  /**
   * Toggles the active state of this machine
   *
   * @returns {undefined}
   */
  toggle() {
    this.active = !this.active
  }
}

export default MachineListItem
