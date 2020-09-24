import React from 'react'
import { Button, Col, Collapse, Input, Row, Tooltip } from 'antd'
import {
  CloudDownloadOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons'

import FilterField from './field'

const FilterView = ({
  activeKey,
  toggleCollapse,
  changeLocationSearch,
  filter,
  changeFilterValue,
  changeFilterValueDebounce,
  showSearch,
  placeholderSearch,
  loading,
  filterFields,
}) => {
  const header = (
    <Row type="flex" justify="space-between" align="middle">
      <Col className="w-1/3">
        {showSearch ? (
          <Input
            value={filter.search}
            onChange={(e) =>
              changeFilterValueDebounce({ search: e.target.value })
            }
            bordered={false}
            placeholder={placeholderSearch || 'Search...'}
            prefix={<SearchOutlined className="mr-2" />}
          />
        ) : null}
      </Col>
      <Col>
        {filterFields.length && activeKey ? (
          <Button
            disabled={loading}
            type="link"
            onClick={() => changeLocationSearch({}, true)}>
            Reset Filter
          </Button>
        ) : null}
        {filterFields.length ? (
          <Button type="link" onClick={toggleCollapse}>
            {activeKey ? 'Close' : 'Show'} Filter
          </Button>
        ) : null}
        <Tooltip placement="bottom" title="Download">
          <Button
            className="ml-4"
            icon={<CloudDownloadOutlined />}
            shape="circle"
          />
        </Tooltip>
        <Tooltip placement="bottomRight" title="Add new data">
          <Button
            className="ml-2"
            icon={<PlusCircleOutlined />}
            type="primary"
            shape="circle"
          />
        </Tooltip>
      </Col>
    </Row>
  )
  return (
    <div className="app-filter mb-6">
      <Collapse
        accordion
        activeKey={activeKey ? '1' : null}
        onChange={() => {}}
        ghost>
        <Collapse.Panel header={header} key="1" showArrow={false}>
          {filterFields.length ? (
            <div className="border-t border-b border-gray-300 pt-4 pb-1">
              <Row gutter={[16, 16]}>
                {filterFields.map((field, ind) => (
                  <Col key={ind} className="w-1/5">
                    <FilterField
                      {...field}
                      type={field.type}
                      fieldName={field.fieldName}
                      filterValue={filter}
                      onChange={changeFilterValue}
                      onChangeDebounce={changeFilterValueDebounce}
                      label={field.label}
                      disabled={loading}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          ) : null}
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}

export default FilterView
