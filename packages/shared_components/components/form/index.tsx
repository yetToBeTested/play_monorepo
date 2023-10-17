import React, { FC, useState } from 'react'
import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Popconfirm,
  Row,
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
  const [data, setData] = useState([...param])
  const [tableForm, setTableForm] = useState<any>()
  const onCallback = (val) => setTableForm(val)

  const columns: any = [
    {
      title: '控件名字',
      dataIndex: 'type',
      width: '15%',
      initialValue: 'input',
      editable: true
    },
    {
      title: '初始值',
      dataIndex: 'initialValue',
      width: '15%',
      initialValue: '我是初始值',
      editable: true
    },
    {
      title: '占位符',
      dataIndex: 'placeholder',
      width: '15%',
      initialValue: '我是占位符',
      editable: true
    },
    {
      title: '大小',
      dataIndex: 'size',
      width: '20%',
      initialValue: 'small',
      editable: true
    },
    {
      title: '可选值',
      dataIndex: 'option',
      width: '20%',
      initialValue: '我是初始值, 我是初始值1, 我是初始值2,我是初始值',
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
    tableForm?.setFieldsValue({
      type: '',
      initialValue: '',
      placeholder: '',
      size: '',
      option: '',
      ...record
    })

    setEditingKey(record.key)
  }

  const save = async (key: React.Key) => {
    try {
      const row = (await tableForm?.validateFields()) as any

      form.setFieldsValue({ [key]: row.initialValue })
      const newData = [...data]
      const index = newData.findIndex((item) => key === item.key)
      if (index > -1) {
        const item = newData[index]
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
  const Node = (type, props, options) => {
    if (type === 'button')
      return (
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            console.log('ooB')
          }}
        >
          按钮
        </Button>
      )
    if (type === 'select') {
      return (
        <Select
          onClick={() => {
            console.log('ooS')
          }}
          style={{ width: '100%' }}
          options={options.map((item, index) => {
            return {
              label: item,
              value: index.toString()
            }
          })}
          {...props}
        />
      )
    }

    if (type === 'input')
      return (
        <Input
          onClick={() => {
            console.log('oo')
          }}
          {...props}
        />
      )
  }

  const { Option } = Select
  const [form] = Form.useForm()

  return (
    <>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 22 }}
        style={{ backgroundColor: '#fff', width: '100%', minHeight: 50 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        onClick={(e) => {
          console.log(e.target, 55)

          // const formItem = e.target.closest('.ant-form-item')

          // if (formItem) {
          //   setClickedElement(formItem)
          // }
        }}
      >
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Form.Item
              name="gender6"
              label="Gender6"
              rules={[{ required: true }]}
              initialValue={'male'}
            >
              <Select
                placeholder="Select a option and change input text above"
                allowClear
                onClick={() => {
                  console.log('SelectF')
                }}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item>
              <Select
                placeholder="Select a option and change input text above"
                allowClear
                onClick={() => {
                  console.log('SelectF')
                }}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <Select
                placeholder="Select a option and change input text above"
                allowClear
                onClick={() => {
                  console.log('SelectF')
                }}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <Select
                placeholder="Select a option and change input text above"
                allowClear
                onClick={() => {
                  console.log('SelectF')
                }}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <Select
                placeholder="Select a option and change input text above"
                allowClear
                onClick={() => {
                  console.log('SelectF')
                }}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Form.Item>
            <Button>777666</Button>
          </Form.Item>

          <Form.Item>
            <Button>777666</Button>
          </Form.Item>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            onClick={() => {
              setData((data) => {
                const newData = [...data]
                if (
                  !data.length ||
                  data[data.length - 1].type != '请选择组件'
                ) {
                  newData.push({
                    key: data.length,
                    type: 'input',
                    initialValue: '我是初始值',
                    placeholder: '我是占位符',
                    size: 'small',
                    option: '我是初始值, 我是初始值1, 我是初始值2,我是初始值'
                  })
                }

                return newData
              })

              setNewItem(true)
            }}
          >
            添加表单控件
          </Button>
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true }]}
          initialValue={'male'}
        >
          <Select
            placeholder="Select a option and change input text above"
            allowClear
            onClick={() => {
              console.log('SelectF')
            }}
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>

        {data.map((item) => {
          const { type, key, option, initialValue, ...Props } = item

          const options = option?.split(',')

          if (type != '请选择组件') {
            console.log('type', type, typeof type, type === 'select')

            return (
              <Form.Item
                label="66"
                name={key}
                key={key}
                initialValue={initialValue}
              >
                {Node(type, Props, options)}
              </Form.Item>
            )
          }
        })}
        <Form.Item>
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
