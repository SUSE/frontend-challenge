import React, { Component } from 'react'

class MachineDetail extends Component {
  render() {
    return (
      <article className="col d-none d-sm-block flex-column border-left p-3">
        <header>
          <h4 className="card-title font-weight-normal mb-4">
            <span title="Machine Name">suma-ref31-cli-sles12sp3-1</span> <span className="small">(<span className="font-weight-light text-muted" title="Machine ID">a2a7915642f3efeec4837a015a679bc1</span>)</span>
          </h4>
        </header>
        <section className="mb-4">
          <h5>
            Machine
          </h5>
          <div>
            <span className="text-info font-weight-light">This machine is virtualised</span>
          </div>
          <div>
            <span className="text-muted font-weight-light mr-2">CPU</span> Intel(R) Core(TM) i7-4930K CPU @ 3.40GHz <small>(64 bit, 4 cores)</small>
          </div>
          <div>
            <span className="text-muted font-weight-light mr-2">GPU</span> VirtualBox Graphics Adapter
          </div>
          <div>
            <span className="text-muted font-weight-light mr-2">RAM</span> 2 GB
          </div>
        </section>
        <section className="mb-4">
          <h5>
            BIOS
          </h5>
          <div>
            <span className="text-muted font-weight-light mr-2">Version</span> VirtualBox
          </div>
          <div>
            <span className="text-muted font-weight-light mr-2">Release</span> 12/01/2006
          </div>
        </section>
        <section className="mb-4">
          <h5>
            Operating System
          </h5>
          <div>
            <span className="text-muted font-weight-light mr-2">Kernel</span> Linux 3.13.0-52-generic
          </div>
          <div>
            <span className="text-muted font-weight-light mr-2">Version</span> Ubuntu 14.04.2 LTS <small>(trusty)</small>
          </div>
          <div>
            <span className="text-muted font-weight-light mr-2">Family</span> Debian
          </div>
          <div>
            <span className="text-muted font-weight-light mr-2">Architecture</span> 64 bit
          </div>
        </section>
        <section className="mb-4">
          <h5>
            Session
          </h5>
          <div>
            <span className="text-muted font-weight-light mr-2">Encoding</span> UTF-8
          </div>
          <div>
            <span className="text-muted font-weight-light mr-2">Language</span> <code>en_US</code>
          </div>
          <div>
            <span className="text-muted font-weight-light mr-2">Shell</span> <code>/bin/bash</code>
          </div>
          <div>
            <span className="text-muted font-weight-light mr-2">Path</span> <code>/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin</code>
          </div>
        </section>
        <section>
          <h5>
            Network
          </h5>
          <div>
            <span className="text-muted font-weight-light mr-2">Master</span> <code>192.168.56.102</code> <a href="http://192.168.56.102" target="_blank">🔗</a>
          </div>
          <div className="row justify-content-start">
            <div className="col-auto mt-2">
              <h6>
                Interface eth0 <a href="http://192.168.56.102" target="_blank">🔗</a>
              </h6>
              <div>
                <span className="text-muted font-weight-light mr-2">IPV4</span> <code>08:00:27:a8:99:a8</code>
              </div>
              <div>
                <span className="text-muted font-weight-light mr-2">IPV6</span> <code>10.0.2.15</code>
              </div>
              <div>
                <span className="text-muted font-weight-light mr-2">MAC</span> <code>fe80::a00:27ff:fea8:99a8</code>
              </div>
            </div>
            <div className="col-auto mt-2">
              <h6>
                Interface eth1 <a href="http://192.168.56.102" target="_blank">🔗</a>
              </h6>
              <div>
                <span className="text-muted font-weight-light mr-2">IPV4</span> <code>08:00:27:9b:a0:23</code>
              </div>
              <div>
                <span className="text-muted font-weight-light mr-2">IPV6</span> <code>192.168.56.103</code>
              </div>
              <div>
                <span className="text-muted font-weight-light mr-2">MAC</span> <code>fe80::a00:27ff:fe9b:a023</code>
              </div>
            </div>
          </div>
        </section>
      </article>
    )
  }
}

export default MachineDetail
