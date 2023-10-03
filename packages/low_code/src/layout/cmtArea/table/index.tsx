import React, { useRef } from 'react'
import { useDrag } from 'react-dnd'

import tableData from './data.json'

function LowCodeTable() {
  const ref = useRef(null)
  const [, drag] = useDrag({
    type: 'box',
    item: {
      component: 'table',
      props: {
        dataSource: tableData.dataSource,
        columns: tableData.columns
      }
    }
  })

  drag(ref)

  return (
    <div ref={ref} className="LowCodeTable">
      table
    </div>
  )
}
export default LowCodeTable
