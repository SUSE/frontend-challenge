class MachineDetail {
  constructor(data) {
    this.id = data.id
    this.public_id = data.machine_id
    this.name = data.nodename

    this.bios = [
      {
        'key': 'Version',
        'value': data.biosversion,
      },
      {
        'key': 'Release',
        'value': data.biosreleasedate
      }
    ]

    this.machine = []

    if(data.virtual) {
      this.machine.push(
        {
          'key': 'virtualised',
          'info': 'This machine is virtualised'
        }
      )
    }

    this.machine.push(
      {
        'key': 'CPU',
        'value': data.cpu_model,
        'description': `${ data.cpuarch.match('64') ? '64' : '32' } bit, ${ data.num_cpus } cores`
      },
      {
        'key': 'GPU',
        'value': data.gpus[0].model,
      },
      {
        'key': 'RAM',
        'value': `${ Math.floor(data.mem_total / 1000) } GB`
      }
    )

    this.os = [
      {
        'key': 'Kernel',
        'value': `${ data.kernel } ${ data.kernelrelease }`,
      },
      {
        'key': 'Version',
        'value': data.lsb_distrib_description,
        'description': data.oscodename
      },
      {
        'key': 'Family',
        'value': data.os_family,
      },
      {
        'key': 'Architecture',
        'value': `${ data.osarch.match('64') ? '64' : '32' } bit`
      }
    ]

    this.session = [
      {
        'key': 'Encoding',
        'value': data.locale_info.defaultencoding
      },
      {
        'key': 'Language',
        'code': data.locale_info.defaultlanguage
      },
      {
        'key': 'Shell',
        'code': data.shell
      },
      {
        'key': 'Path',
        'code': data.path
      }
    ]

    this.network = {
      global: [
        {
          'key': 'Master',
          'code': '192.168.56.102'
        }
      ],
      interfaces: this.getNetworkInterfaces(data)
    }
  }

  getNetworkInterfaces(data) {
    let reference = [
          {
            'name': 'IPV4',
            'key': 'ip4_interfaces'
          },
          {
            'name': 'IPV6',
            'key': 'ip6_interfaces'
          },
          {
            'name': 'MAC',
            'key': 'hwaddr_interfaces'
          }
        ],
        interfaceList = []

    reference.forEach((item) => {
      for(let key in data[item.key]) {
        if(key !== 'lo') {
          let interfaceItem = interfaceList.find((item) => item.name === key),
              value = data[item.key][key]

          if(!interfaceItem) {
            interfaceItem = {
              name: key,
              items: []
            }

            interfaceList.push(interfaceItem)
          }

          interfaceItem.items.push({
            'key': item.name,
            'code': typeof value === 'string' ? value : value[0]
          })
        }
      }
    })

    return interfaceList
  }

  getViewSections() {
    return [
      {
        'name': 'Machine',
        'items': this.machine
      },
      {
        'name': 'BIOS',
        'items': this.bios
      },
      {
        'name': 'Operating System',
        'items': this.os
      },
      {
        'name': 'Session',
        'items': this.session
      },
      {
        'name': 'Network',
        'items': this.network.global,
        'list': this.network.interfaces
      }
    ]
  }
}

export default MachineDetail
