import React from 'react'
import { Button, Card, Col, Collapse, Input, Row, Tooltip } from 'antd'
import {
  CloudDownloadOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons'

const FilterView = ({ activeKey, toggleCollapse }) => {
  const header = (
    <Row type="flex" justify="space-between" align="middle">
      <Col className="w-1/3">
        <Input
          bordered={false}
          placeholder="Search..."
          prefix={<SearchOutlined className="mr-2" />}
        />
      </Col>
      <Col>
        <Button type="link" onClick={toggleCollapse}>
          {activeKey ? 'Close' : 'More'} Filters
        </Button>
        <Tooltip placement="bottom" title="Download">
          <Button icon={<CloudDownloadOutlined />} shape="circle" />
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
          <Card>
            <Row>
              <Col>
                <label>Input 1</label>
                <Input />
              </Col>
            </Row>
            <Row type="flex" justify="start" className="mt-4">
              <Col>
                <Button>Reset</Button>
              </Col>
            </Row>
          </Card>
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}

export default FilterView
