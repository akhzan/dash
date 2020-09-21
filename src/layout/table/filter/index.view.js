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
            onChange={(e) => changeFilterValue({ search: e.target.value })}
            onPressEnter={() => changeLocationSearch()}
            bordered={false}
            placeholder={placeholderSearch || 'Search...'}
            prefix={<SearchOutlined className="mr-2" />}
          />
        ) : null}
      </Col>
      <Col>
        {filterFields.length ? (
          <Button type="link" onClick={toggleCollapse}>
            {activeKey ? 'Close' : 'Show'} Filters
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
            <div className="border-t border-b border-gray-300 py-4">
              <Row gutter={[16, 16]}>
                {filterFields.map((field, ind) => (
                  <Col key={ind} className="w-1/5">
                    <FilterField
                      type={field.type}
                      fieldName={field.fieldName}
                      value={filter.search}
                      onChange={changeFilterValue}
                      label={field.label}
                    />
                  </Col>
                ))}
              </Row>
              <div>
                <Button
                  size="small"
                  type="primary"
                  loading={loading}
                  onClick={() => changeLocationSearch()}>
                  Filter
                </Button>
                <Button
                  className="ml-2"
                  size="small"
                  disabled={loading}
                  onClick={() => changeLocationSearch(true)}>
                  Reset
                </Button>
              </div>
            </div>
          ) : null}
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}

export default FilterView
