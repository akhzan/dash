import React from 'react'
import { Input } from 'antd'

export const filterFieldTypes = {
  TEXT: 'TEXT',
  SELECT: 'SELECT',
}

const FilterFields = ({ type, value, onChange, label, ...args }) => {
  const types = {
    TEXT: (
      <div>
        <label>{label}</label>
        <Input onChange={onChange} value={value} {...args} />
      </div>
    ),
  }
  const renderFilter = types[type] || null
  return renderFilter
}

export default FilterFields
