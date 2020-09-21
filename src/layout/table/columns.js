import React from 'react'
import { Button, Space, Tooltip } from 'antd'
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  HistoryOutlined,
} from '@ant-design/icons'

export const extendColumns = ({ columns, extendActionColumn }) => [
  {
    title: 'No',
    dataIndex: 'idx',
    key: 'idx',
    width: 40,
  },
  ...columns,
  {
    title: '',
    dataIndex: 'id',
    key: 'action',
    width: 180,
    // eslint-disable-next-line react/display-name
    render: (id, record) => (
      <Space>
        <Tooltip placement="bottom" title="View">
          <Button shape="circle" icon={<EyeOutlined />} />
        </Tooltip>
        <Tooltip placement="bottom" title="Edit">
          <Button shape="circle" icon={<EditOutlined />} />
        </Tooltip>
        <Tooltip placement="bottom" title="View History">
          <Button shape="circle" icon={<HistoryOutlined />} />
        </Tooltip>
        <Tooltip placement="bottom" title="Delete">
          <Button shape="circle" icon={<DeleteOutlined />} />
        </Tooltip>
        {extendActionColumn ? extendActionColumn(record) : null}
      </Space>
    ),
  },
]
