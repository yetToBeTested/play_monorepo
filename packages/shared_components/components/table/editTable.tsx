import React, { useEffect, useState } from 'react'
import { Form, Input, Select, Space, Table, Tag } from 'antd'

interface Item {
  key?: string
  name: string
  age: number
  address: string
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean
  dataIndex: string
  title: any
  inputType: 'select' | 'number' | 'text'
  record: Item
  index: number
  form: any
  children: React.ReactNode
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  form,
  children,
  ...restProps
}) => {
  const { Option } = Select

  const inputNode = () => {
    if (dataIndex === 'type') {
      return (
        <Select defaultValue="input" style={{ width: 100 }}>
          <Option value="input">input</Option>
          <Option value="select">select</Option>
        </Select>
      )
    } else if (dataIndex === 'size') {
      return (
        <Select defaultValue="small" style={{ width: 100 }}>
          <Option value="small">small</Option>
          <Option value="large">large</Option>
        </Select>
      )
    } else if (dataIndex === 'option') {
      const type = form.getFieldValue().type

      if (type === 'select') {
        return <Input placeholder="请输入：data1,data2,data3..." />
      } else {
        return <span>无</span>
      }
    } else {
      return <Input />
    }
  }

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: dataIndex === 'type',
              message: `Please Input ${title}!`
            }
          ]}
        >
          {inputNode()}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}

interface IProps {
  columns: any[]
  dataSource: any[]
  scroll: object
  isEditing: (param: any) => void
  cancel: () => void
  onCallback: (param: any) => void
}
const SharedContainerEditTable: React.FC<IProps> = ({
  columns = [],
  dataSource = [],
  scroll = {},
  isEditing,
  cancel,
  onCallback
}) => {
  const [form] = Form.useForm()

  useEffect(() => {
    onCallback(form)
  }, [form])

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        form: form,
        editing: isEditing(record)
      })
    }
  })

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell
          }
        }}
        bordered
        dataSource={dataSource}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel
        }}
        scroll={scroll}
      />
    </Form>
  )
}

export { SharedContainerEditTable }
