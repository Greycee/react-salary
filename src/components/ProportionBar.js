import React, { Component } from 'react'

export default class ProportionBar extends Component {
  render() {
    const { inss, irpf, netSalary } = this.props
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <div
          style={{
            backgroundColor: '#e67e22',
            width: inss + '%',
            height: '20px',
          }}
        />
        <div
          style={{
            backgroundColor: '#c0392b',
            width: irpf + '%',
            height: '20px',
          }}
        />
        <div
          style={{
            backgroundColor: '#16a085',
            width: netSalary + '%',
            height: '20px',
          }}
        />
      </div>
    )
  }
}
