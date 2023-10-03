import React, { useRef } from 'react'
import { useDrag } from 'react-dnd'
// import styles from './index.module.less'
function Box() {
  const ref = useRef(null)

  const [, drag] = useDrag({
    type: 'box',
    item: {
      component: 'box',
      props: {
        dataSource: [],
        columns: []
      }
    }
  })

  drag(ref)

  return <div ref={ref}>box</div>
}
export default Box
