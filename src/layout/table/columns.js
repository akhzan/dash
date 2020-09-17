import React from 'react'
import { Button, Tooltip } from 'antd'
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  HistoryOutlined,
} from '@ant-design/icons'

export const extendColumns = ({ columns }) => [
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
    render: () => (
      <div className="flex justify-end">
        <Tooltip placement="bottom" title="View">
          <Button shape="circle" icon={<EyeOutlined />} />
        </Tooltip>
        <Tooltip placement="bottom" title="Edit">
          <Button shape="circle" className="ml-2" icon={<EditOutlined />} />
        </Tooltip>
        <Tooltip placement="bottom" title="View History">
          <Button shape="circle" className="ml-2" icon={<HistoryOutlined />} />
        </Tooltip>
        <Tooltip placement="bottom" title="Delete">
          <Button shape="circle" className="ml-2" icon={<DeleteOutlined />} />
        </Tooltip>
      </div>
    ),
  },
]
