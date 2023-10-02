import { Form, Select } from 'antd'
import {
  WrapFormComponent,
  ProgressComponent
} from '@motorepo/component/components'

import { useEffect, useRef, useState } from 'react'
const { Option } = Select
function App() {
  const [strokeDashoffset, setStrokeDashoffset] = useState(0)
  const ref = useRef()
  const handleChange = (value: unknown) => {
    console.log(`selected ${value}`)
  }
  useEffect(() => {
    if (strokeDashoffset < 100) {
      setTimeout(() => {
        setStrokeDashoffset((val) => val + 10)
      }, 100)
    }
    console.log('strokeDashoffset', strokeDashoffset)
  }, [strokeDashoffset])
  console.log('strokeDashoffset444444444', strokeDashoffset)

  return (
    <>
      <div>
        <Form>
          <WrapFormComponent
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
          </WrapFormComponent>
        </Form>
        <ProgressComponent
          style={{ marginTop: '10px' }}
          r={100}
          strokeDashoffset={strokeDashoffset}
        ></ProgressComponent>
      </div>
    </>
  )
}

export default App
