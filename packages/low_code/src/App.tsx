import { Box, LowCodeTable, Container, LowCodeEdit, Progress } from './layout'
import './App.less'

function App() {
  return (
    <div className="App">
      <div className="left">
        <span>组件区</span>
        <Box />
        <LowCodeTable />
        <Progress />
      </div>
      <div className="center">
        <Container />
      </div>
      <div className="right">
        <LowCodeEdit />
      </div>
    </div>
  )
}

export default App
