import { Col, Row, Tag } from 'antd'
import {
  LowCodeBox,
  LowCodeTable,
  LowCodeContainer,
  LowCodeEdit,
  LowCodeProgress,
  LowCodeForm
} from './layout'
import styles from './App.module.less'

function App() {
  return (
    <div className={styles['App']}>
      <div className={styles['top']}>
        <div>保存</div>
        <div>导出</div>
      </div>
      <div className={styles['content']}>
        <div className={styles['left']}>
          <Row className={[styles['title'], styles['row']].join(' ')}>
            组件区
          </Row>
          {/* <div className={srtyles['title']}></div> */}

          <Row className={styles['row']}>
            <Col span={8}>
              <Tag color="black">
                <LowCodeBox />
              </Tag>
            </Col>
            <Col span={8}>
              <Tag color="black">
                <LowCodeTable />
              </Tag>
            </Col>
            <Col span={8}>
              <Tag color="black">
                <LowCodeProgress />
              </Tag>
            </Col>
          </Row>
          <Row className={styles['row']}>
            <Col span={8}>
              <Tag color="black">
                <LowCodeProgress />
              </Tag>
            </Col>
            <Col span={8}>
              <Tag color="black">
                <LowCodeProgress />
              </Tag>
            </Col>
            <Col span={8}>
              <Tag color="black">
                <LowCodeForm />
              </Tag>
            </Col>
          </Row>
        </div>
        <div className={styles['center']}>
          <LowCodeContainer />
        </div>
        <div className={styles['right']}>
          <LowCodeEdit />
        </div>
      </div>
    </div>
  )
}

export default App
