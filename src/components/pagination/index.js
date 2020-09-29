import React from 'react'
import { Button, Row, Space } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const Pagination = ({ loading, changePage, count, currentPage }) => {
  const curPage = parseInt(currentPage || 1)
  const nextPage = curPage + 1
  const prevPage = curPage - 1 <= 0 ? 1 : curPage - 1
  return (
    <Row type="flex" justify="end" className="mt-6">
      <Space>
        <Button
          onClick={() => changePage(prevPage)}
          disabled={loading || curPage <= 1}
          shape="circle"
          icon={<LeftOutlined />}
        />
        <Button
          onClick={() => changePage(nextPage)}
          disabled={loading || count < 10}
          shape="circle"
          icon={<RightOutlined />}
        />
      </Space>
    </Row>
  )
}

export default Pagination
