import React, { memo, useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'

import { Form, Select } from 'antd'

// import WrapFormComponent from '@/component/demo1'
import WrapFormComponent from '../../../components/src/demo1'
console.log(WrapFormComponent.length)

import './index.less'
interface Iprops {
  children?: ReactNode
}
const { Option } = Select
const index: FC<Iprops> = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }
  const ref = useRef()
  useEffect(() => {
    console.log('ref', ref.current)
  }, [ref])
  return (
    <Form>
      {/* <WrapFormComponent
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
      </WrapFormComponent> */}
    </Form>
  )
}
export default memo(index)
