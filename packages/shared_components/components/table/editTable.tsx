import React, { useEffect, useMemo, useState } from 'react'
import { Button, Form, Input, Select, Space, Table, Tag } from 'antd'

interface Item {
  key?: string
  name: string
  age: number
  address: string
  initialValue: string
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean
  dataIndex: string
  initialValue: string
  title: any
  inputType: 'select' | 'number' | 'text'
  record: Item
  index: number
  form: any
  selectedOption: any
  setSelectedOption: any
  children: React.ReactNode
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  form,
  initialValue,
  children,
  selectedOption,
  setSelectedOption,
  ...restProps
}) => {
  const { Option } = Select

  const handleSelectChange = (value) => {
    // 根据选择的值来决定要显示在 Input 组件中的内容

    if (value === 'input') {
      console.log('value', value)
      setSelectedOption({ ...selectedOption, type: value })
    } else if (value === 'select') {
      setSelectedOption({
        ...selectedOption,
        type: value
      })
    } else {
      setSelectedOption({ type: 'select' })
    }
  }

  const inputNode = () => {
    if (dataIndex === 'type') {
      return (
        <>
          <Select
            style={{ width: 100 }}
            placeholder={initialValue}
            onChange={handleSelectChange}
          >
            <Option value="input">input</Option>
            <Option value="select">select</Option>
          </Select>
        </>
      )
    } else if (dataIndex === 'size') {
      return (
        <Select style={{ width: 100 }} placeholder={initialValue}>
          <Option value="small">small</Option>
          <Option value="large">large</Option>
        </Select>
      )
    } else if (dataIndex === 'option') {
      // const type = form.getFieldValue().type

      // return <Input value={selectedOption} />
      // console.log('selectedOption', selectedOption)
      console.log(selectedOption)

      return (
        <Input
          disabled={selectedOption.type !== 'select'}
          placeholder="请输入：data1,data2,data3..."
        />
      )
    } else {
      return <Input placeholder={initialValue} />
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
  const [selectedOption, setSelectedOption] = useState({ type: '' })
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
        title: col.title,
        dataIndex: col.dataIndex,
        initialValue: col.initialValue,
        form: form,
        editing: isEditing(record),
        selectedOption,
        setSelectedOption
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
