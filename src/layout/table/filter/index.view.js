import React from 'react'
import { Button, Col, Collapse, Input, Row, Tooltip } from 'antd'
import {
  CloudDownloadOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons'

const FilterView = ({
  activeKey,
  toggleCollapse,
  changeLocationSearch,
  filter,
  changeFilterValue,
}) => {
  const header = (
    <Row type="flex" justify="space-between" align="middle">
      <Col className="w-1/3">
        <Input
          value={filter.search}
          onChange={(e) => changeFilterValue('search', e.target.value)}
          onPressEnter={changeLocationSearch}
          bordered={false}
          placeholder="Search..."
          prefix={<SearchOutlined className="mr-2" />}
        />
      </Col>
      <Col>
        <Button type="link" onClick={toggleCollapse}>
          {activeKey ? 'Close' : 'Show'} Filters
        </Button>
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
          <div className="border-t border-b border-gray-300 py-4">
            <Row gutter={[16, 16]}>
              <Col className="w-1/5">
                <label>Input 1</label>
                <Input placeholder="Input 1" />
              </Col>
              <Col className="w-1/5">
                <label>Input 1</label>
                <Input placeholder="Input 1" />
              </Col>
              <Col className="w-1/5">
                <label>Input 1</label>
                <Input placeholder="Input 1" />
              </Col>
              <Col className="w-1/5">
                <label>Input 1</label>
                <Input placeholder="Input 1" />
              </Col>
              <Col className="w-1/5">
                <label>Input 1</label>
                <Input placeholder="Input 1" />
              </Col>
            </Row>
            <div>
              <Button size="small" type="primary">
                Filter
              </Button>
              <Button className="ml-2" size="small">
                Reset
              </Button>
            </div>
          </div>
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}

export default FilterView
