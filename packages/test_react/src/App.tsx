import { Table } from 'antd'
// import {
//   SharedWrapFormComponent,
//   SharedProgressComponent
// } from '@motorepo/component'

// import { useEffect, useRef, useState } from 'react'
// const { Option } = Select

function App() {
  // const [strokeDashoffset, setStrokeDashoffset] = useState(0)
  // const ref = useRef()
  // const handleChange = (value: unknown) => {
  //   console.log(`selected ${value}`)
  // }
  // useEffect(() => {
  //   if (strokeDashoffset < 100) {
  //     setTimeout(() => {
  //       setStrokeDashoffset((val) => val + 10)
  //     }, 100)
  //   }
  //   console.log('strokeDashoffset', strokeDashoffset)
  // }, [strokeDashoffset])
  // console.log('strokeDashoffset444444444', strokeDashoffset)
  const dataSource = [
    {
      key: '1',
      name: { name: 'John', age: 30 },
      age: 32,
      address: '西湖区湖底公园1号'
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }
  ]

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address'
    }
  ]

  return (
    <div>
      {/* <Form>
        <SharedWrapFormComponent
          ref={ref}
          label={'yonghu'}
          isSelect={true}
          className="wrap"
        >
          <Select defaultValue="lucy" onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </SharedWrapFormComponent>
      </Form>
      <SharedProgressComponent
        style={{ marginTop: '10px' }}
        r={100}
        strokeDashoffset={strokeDashoffset}
      ></SharedProgressComponent> */}
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  )
}

export default App
