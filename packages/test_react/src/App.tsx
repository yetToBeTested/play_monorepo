import { Input, Select } from 'antd'
import { useState } from 'react'

function App() {
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectChange = (value) => {
    // 根据选择的值来决定要显示在 Input 组件中的内容
    if (value === 'option1') {
      setSelectedOption('输入内容1')
    } else if (value === 'option2') {
      setSelectedOption('输入内容2')
    } else {
      setSelectedOption('')
    }
  }

  const { Option } = Select

  return (
    <div>
      <Select onChange={handleSelectChange}>
        <Option value="option1">选项1</Option>
        <Option value="option2">选项2</Option>
        <Option value="option3">选项3</Option>
      </Select>
      <Input value={selectedOption} />
    </div>
  )
}

export default App
