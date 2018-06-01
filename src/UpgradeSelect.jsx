'use strict'

import React, { Component } from 'react'
import { Select } from 'igroot'

const { Option } = Select

export default class UpgradeSelect extends Component {
  static displayName = 'UpgradeSelect'

  constructor(props) {
    super(props)

    const { options } = this.props 
    this.getOptionsMapValue(options)
  }

  getOptionsMapValue = (options) => {
    this.optionsMapValue = []

    options.map(item => {
      this.optionsMapValue[item.value] = item 
    })
  }

  handleChange = (value) => {
    const { onChange } = this.props
    onChange && onChange(value)
  }

  handleFilter = (input, option) => {
    const { options, filterkeys } = this.props 
    const { value, children } = option.props 
    const currentItem  = this.optionsMapValue[value]
    let isFilterOk = false 

    if (filterkeys && filterkeys.length) {
      filterkeys.map(key => {
        const text = currentItem[key]
        isFilterOk = isFilterOk || (text.toLowerCase().indexOf(input.toLowerCase()) >= 0)
      })
    }

    return isFilterOk || (value.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
    children.toLowerCase().indexOf(input.toLowerCase()) >= 0)
  }

  renderChildren() {
    const { options } = this.props 

    return options.map(({ value, label }) => (
      <Option key={value} value={`${value}`}>{label}</Option>
    ))
  }

  render() {
    const { filterkeys } = this.props

    return (
      <Select
        {...this.props}
        onChange={this.handleChange}
        filterOption={this.handleFilter}
      >
        {this.renderChildren()}
      </Select>
    )
  }
}
