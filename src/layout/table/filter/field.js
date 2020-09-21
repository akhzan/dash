import React from 'react'
import { Input } from 'antd'

import Datepicker from '../../../components/datepicker'

export const filterFieldTypes = {
  TEXT: 'TEXT',
  SELECT: 'SELECT',
  DATE: 'DATE',
  RANGE: 'RANGE',
}

const FilterField = ({ type, fieldName, value, onChange, label, ...args }) => {
  const types = {
    TEXT: (
      <Input
        onChange={(e) => onChange({ [fieldName]: e.target.value })}
        value={value}
        {...args}
      />
    ),
    DATE: <Datepicker onChange={(val) => console.log(val)} />,
  }
  const renderFilter = types[type] || null
  return (
    <div>
      <label>{label}</label>
      {renderFilter}
    </div>
  )
}

export default FilterField
