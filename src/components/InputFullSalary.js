import React, { Component } from 'react'

export default class InputFullSalary extends Component {
  handleInputChange = (e) => {
    const newValue = +e.target.value
    this.props.onSalaryChange(newValue)
  }

  render() {
    const { currentValue } = this.props
    return (
      <div className="input-field col s12">
        <input
          autoFocus
          id="inputFullSalary"
          type="number"
          value={currentValue}
          onChange={this.handleInputChange}
          min="1000"
          step="100"
        />
        <label className="active" htmlFor="inputFullSalary">
          Salário bruto - Gross salary
        </label>
      </div>
    )
  }
}
