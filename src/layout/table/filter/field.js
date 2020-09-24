import React from 'react'
import { Input, Select } from 'antd'
import dayjs from 'dayjs'
import Datepicker from '../../../components/datepicker'
import { DATE_FORMAT_FILTER } from '../../../config/constants/datetime'

// TODO: Add source API functionality in SELECT type

export const filterFieldTypes = {
  TEXT: 'TEXT',
  SELECT: 'SELECT',
  DATE: 'DATE',
  RANGE: 'RANGE',
}

const parseDate = (value) =>
  value && dayjs(value, DATE_FORMAT_FILTER).isValid
    ? dayjs(value, DATE_FORMAT_FILTER)
    : null

const FilterField = ({
  type,
  fieldName,
  filterValue,
  onChange,
  onChangeDebounce,
  label,
  source,
  sourceLabel,
  sourceValue,
  defaultValue,
  ...args
}) => {
  let value = null
  if (type === filterFieldTypes.RANGE) {
    let startDate = filterValue[fieldName[0]] || null
    let endDate = filterValue[fieldName[1]] || null
    startDate = parseDate(startDate)
    endDate = parseDate(endDate)
    value = startDate && endDate ? [startDate, endDate] : null
  } else if (type === filterFieldTypes.DATE) {
    value = filterValue[fieldName]
    value = parseDate(value)
  } else {
    value = filterValue[fieldName]
  }
  const types = {
    TEXT: (
      <Input
        {...args}
        onChange={(e) => onChangeDebounce({ [fieldName]: e.target.value })}
        value={value}
      />
    ),
    DATE: (
      <div>
        <Datepicker
          {...args}
          className="w-full"
          value={value}
          onChange={(val) =>
            onChange({
              [fieldName]: val ? val.format(DATE_FORMAT_FILTER) : null,
            })
          }
          format={DATE_FORMAT_FILTER}
        />
      </div>
    ),
    RANGE: (
      <div>
        <Datepicker.RangePicker
          {...args}
          className="w-full"
          value={value}
          onChange={(val) =>
            onChange({
              [fieldName[0]]: val ? val[0].format(DATE_FORMAT_FILTER) : null,
              [fieldName[1]]: val ? val[1].format(DATE_FORMAT_FILTER) : null,
            })
          }
          format={DATE_FORMAT_FILTER}
        />
      </div>
    ),
    SELECT: (
      <div>
        <Select
          {...args}
          className="w-full"
          value={value || defaultValue}
          onChange={(val) => onChange({ [fieldName]: val })}>
          {(source || []).map((s) => (
            <Select.Option
              key={s[sourceValue || 'code']}
              value={s[sourceValue || 'code']}>
              {s[sourceLabel || 'name']}
            </Select.Option>
          ))}
        </Select>
      </div>
    ),
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
