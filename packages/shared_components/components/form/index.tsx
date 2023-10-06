import React, { FC, useState } from 'react'
import {
  Button,
  Form,
  Input,
  Modal,
  Popconfirm,
  Select,
  Typography
} from 'antd'

import { SharedContainerEditTable } from '../table'

interface Iprops {
  data?: any[]
}
const SharedForm: FC<Iprops> = ({ data: param = [] }) => {
  const [newItem, setNewItem] = useState(false)
  const [editingKey, setEditingKey] = useState<any>('')
  const [data, setData] = useState(param)
  const [form, setForm] = useState<any>()
  const onCallback = (val) => setForm(val)

  const columns: any = [
    {
      title: '控件名字',
      dataIndex: 'type',
      width: '25%',
      editable: true
    },
    {
      title: '占位符',
      dataIndex: 'placeholder',
      width: '15%',
      editable: true
    },
    {
      title: '大小',
      dataIndex: 'size',
      width: '20%',
      editable: true
    },
    {
      title: '可选值',
      dataIndex: 'option',
      width: '20%',
      editable: true
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: any) => {
        const editable = isEditing(record)
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        )
      }
    }
  ]

  const isEditing = (record: { key: any }) => record.key === editingKey

  const edit = (record: Partial<any> & { key: React.Key }) => {
    form?.setFieldsValue({
      type: '',
      placeholder: '',
      size: '',
      option: '',
      ...record
    })
    setEditingKey(record.key)
  }

  const save = async (key: React.Key) => {
    try {
      const row = (await form?.validateFields()) as any

      const newData = [...data]
      const index = newData.findIndex((item) => key === item.key)
      if (index > -1) {
        const item = newData[index]
        item.option = row.operation
        newData.splice(index, 1, {
          ...item,
          ...row
        })
        setData(newData)
        setEditingKey('')
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo)
    }
  }
  const cancel = () => {
    setEditingKey('')
  }

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const handleCancel = () => {
    setNewItem(false)
  }
  const handleOk = () => {
    setNewItem(false)
  }
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ backgroundColor: '#fff', width: '100%', minHeight: 50 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item>
          <Button
            type="primary"
            onClick={() => {
              setData((data) => {
                const newData = [...data]
                newData.push({
                  type: '请选择组件',
                  key: data.length
                })
                return newData
              })
              setNewItem(true)
            }}
          >
            添加表单控件
          </Button>
        </Form.Item>
        {data.map((item) => {
          if (item.type === 'button')
            return (
              <Button key={item.key} type="primary" htmlType="submit">
                按钮
              </Button>
            )
          if (item.type === 'select') {
            const options = item?.option.split(',')
            return (
              <Select
                key={item.key}
                style={{ width: '100%' }}
                defaultValue={options[0]}
                options={options.map((item, index) => {
                  return {
                    label: item,
                    value: index.toString()
                  }
                })}
              />
            )
          }
          if (item.type === 'input') return <Input key={item.key} />
        })}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Modal
        title="Basic Modal"
        open={newItem}
        width={'80%'}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <SharedContainerEditTable
          isEditing={isEditing}
          cancel={cancel}
          columns={columns}
          dataSource={data}
          scroll={{ x: 1500, y: 300 }}
          onCallback={onCallback}
        />
      </Modal>
    </>
  )
}

export default SharedForm
