import React, { Component } from 'react'

import Section from './Section'

class MachineDetail extends Component {
  render() {
    let machine = [
      {
        'items': [
          {
            'info': 'This machine is virtualised',
            'key': 'virtualised'
          },
          {
            'description': '64 bit, 4 cores',
            'key': 'CPU',
            'value': 'Intel(R) Core(TM) i7-4930K CPU @ 3.40GHz'
          },
          {
            'key': 'GPU',
            'value': 'VirtualBox Graphics Adapter'
          },
          {
            'key': 'RAM',
            'value': '2 GB'
          }
        ],
        'name': 'Machine'
      },
      {
        'items': [
          {
            'key': 'Version',
            'value': 'VirtualBox'
          },
          {
            'key': 'Release',
            'value': '12/01/2006'
          }
        ],
        'name': 'BIOS'
      },
      {
        'items': [
          {
            'key': 'Kernel',
            'value': 'Linux 3.13.0-52-generic'
          },
          {
            'description': 'trusty',
            'key': 'Version',
            'value': 'Ubuntu 14.04.2 LTS'
          },
          {
            'key': 'Family',
            'value': 'Debian'
          },
          {
            'key': 'Architecture',
            'value': '64 bit'
          }
        ],
        'name': 'Operating System'
      },
      {
        'items': [
          {
            'key': 'Encoding',
            'value': 'UTF-8'
          },
          {
            'code': 'en_US',
            'key': 'Language'
          },
          {
            'code': '/bin/bash',
            'key': 'Shell'
          },
          {
            'code': '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
            'key': 'Path'
          }
        ],
        'name': 'Session'
      },
      {
        'items': [
          {
            'code': '192.168.56.102',
            'key': 'Master'
          }
        ],
        'list': [
          {
            'items': [
              {
                'code': '10.0.2.15',
                'key': 'IPV4'
              },
              {
                'code': 'fe80::a00:27ff:fea8:99a8',
                'key': 'IPV6'
              },
              {
                'code': '08:00:27:a8:99:a8',
                'key': 'MAC'
              }
            ],
            'name': 'eth0'
          },
          {
            'items': [
              {
                'code': '192.168.56.103',
                'key': 'IPV4'
              },
              {
                'code': 'fe80::a00:27ff:fe9b:a023',
                'key': 'IPV6'
              },
              {
                'code': '08:00:27:9b:a0:23',
                'key': 'MAC'
              }
            ],
            'name': 'eth1'
          }
        ],
        'name': 'Network'
      }
    ]

    return (
      <article className="col d-none d-sm-block flex-column border-left p-3">
        <header>
          <h4 className="card-title font-weight-normal mb-4">
            <span title="Machine Name">suma-ref31-cli-sles12sp3-1</span> <span className="small">(<span className="font-weight-light text-muted" title="Machine ID">a2a7915642f3efeec4837a015a679bc1</span>)</span>
          </h4>
        </header>
        {machine.map((section, index) => {
          return <Section key={ index } section={ section }></Section>
        })}
      </article>
    )
  }
}

export default MachineDetail
