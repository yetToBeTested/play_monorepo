import React, { useRef } from 'react'
import { useDrag } from 'react-dnd'
// import './index.less'
function LowCodeProgress() {
  const ref = useRef(null)

  const [, drag] = useDrag({
    type: 'box',
    item: {
      component: 'progress',
      color: 'blue',
      props: {
        dataSource: [],
        columns: []
      }
    }
  })

  drag(ref)

  return <div ref={ref}>进度条</div>
}
export default LowCodeProgress
