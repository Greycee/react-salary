import React, { Component } from 'react'
import InputFullSalary from './components/InputFullSalary'
import { calculateSalaryFrom } from './helpers/salary'
import InputReadOnly from './components/InputReadOnly'
import ProportionBar from './components/ProportionBar'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      fullSalary: 1000,
    }
  }

  handleFullSalaryChange = (newValue) => {
    this.setState({ fullSalary: newValue })
  }

  render() {
    const { fullSalary } = this.state
    const salaryObject = calculateSalaryFrom(fullSalary)
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      percentINSS,
      percentIRPF,
      percentNetSalary,
    } = salaryObject

    return (
      <div className="container">
        <h1 className="center">React Salary</h1>
        <div className="row">
          <InputFullSalary
            currentValue={fullSalary}
            onSalaryChange={this.handleFullSalaryChange}
          />
        </div>
        <div className="row">
          <InputReadOnly label="Base INSS" value={baseINSS} />
          <InputReadOnly
            label="Desconto INSS"
            value={discountINSS}
            percentage={percentINSS}
            color="#e67e22"
          />
          <InputReadOnly label="Base IRPF" value={baseIRPF} />
          <InputReadOnly
            label="Desconto IRPF"
            value={discountIRPF}
            percentage={percentIRPF}
            color="#c0392b"
          />
          <InputReadOnly
            label="Salário Líquido - Net Salary"
            value={netSalary}
            percentage={percentNetSalary}
            color="#16a085"
          />
        </div>
        <ProportionBar
          inss={percentINSS}
          irpf={percentIRPF}
          netSalary={percentNetSalary}
        />
      </div>
    )
  }
}
