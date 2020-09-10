import React from 'react'
import { Row, Col, Card, Statistic, Table } from 'antd'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

import MainView from '../../layout/main/index.view'
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer'

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
    <Row gutter={16}>
      <Col span={12}>
        <Row gutter={16} className="mb-4">
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
        <Card>
          <p className="text-lg mb-6">IDR in Last 30 Days</p>
          <ResponsiveContainer width="100%" height={520}>
            <LineChart data={histories}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={['dataMin-100', 'auto']} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="IDR" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </Col>
      <Col span={12}>
        <Card className="h-full">
          <p className="text-lg mb-8">Last 30 Days Currencies</p>
          <Table
            rowKey="date"
            // size="middle"
            columns={columns}
            dataSource={histories}
          />
        </Card>
      </Col>
    </Row>
  </MainView>
)

export default HomeView
