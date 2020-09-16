import React from 'react'
import { Button } from 'antd'
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  HistoryOutlined,
} from '@ant-design/icons'

export const extendColumns = ({ columns }) => [
  ...columns,
  {
    title: '',
    dataIndex: 'id',
    key: 'action',
    width: 180,
    // eslint-disable-next-line react/display-name
    render: () => (
      <div className="flex justify-end">
        <Button shape="circle" icon={<EyeOutlined />} />
        <Button shape="circle" className="ml-2" icon={<EditOutlined />} />
        <Button shape="circle" className="ml-2" icon={<HistoryOutlined />} />
        <Button shape="circle" className="ml-2" icon={<DeleteOutlined />} />
      </div>
    ),
  },
]
