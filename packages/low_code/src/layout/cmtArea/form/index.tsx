import React, { useRef } from 'react'
import { useDrag } from 'react-dnd'

function LowCodeForm() {
  const ref = useRef(null)

  const [, drag] = useDrag({
    type: 'box',
    item: {
      component: 'form',
      props: {}
    }
  })

  drag(ref)

  return <div ref={ref}>Form</div>
}
export default LowCodeForm
