import React from 'react'
import MainView from '../../layout/main/index.view'
import { Row, Col, Card, Statistic, Table } from 'antd'

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'IDR',
    dataIndex: 'IDR',
    key: 'IDR',
  },
  {
    title: 'JPY',
    dataIndex: 'JPY',
    key: 'JPY',
  },
  {
    title: 'KRW',
    dataIndex: 'KRW',
    key: 'KRW',
  },
]

const HomeView = ({ latest, histories }) => (
  <MainView title="Dashboard">
    <div className="w-3/6 mb-4">
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="IDR" value={latest.IDR} precision={2} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="JPY" value={latest.JPY} precision={2} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="KRW" value={latest.KRW} precision={2} />
          </Card>
        </Col>
      </Row>
    </div>
    <div className="w-3/6">
      <Card>
        <p className="text-lg mb-6">Last 30 Days Currencies</p>
        <Table
          key="date"
          size="middle"
          columns={columns}
          dataSource={histories}
        />
      </Card>
    </div>
  </MainView>
)

export default HomeView
