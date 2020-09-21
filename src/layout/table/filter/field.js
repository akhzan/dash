import React from 'react'
import { Input } from 'antd'

export const filterFieldTypes = {
  TEXT: 'TEXT',
  SELECT: 'SELECT',
}

const FilterField = ({ type, fieldName, value, onChange, label, ...args }) => {
  const types = {
    TEXT: (
      <div>
        <label>{label}</label>
        <Input
          onChange={(e) => onChange({ [fieldName]: e.target.value })}
          value={value}
          {...args}
        />
      </div>
    ),
  }
  const renderFilter = types[type] || null
  return renderFilter
}

export default FilterField
