import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { useDrop } from 'react-dnd'

import {
  SharedContainerTable,
  SharedBox,
  SharedProgressComponent,
  SharedForm
} from '@motorepo/component'
import { useAppDispatch, useAppSelector } from '@/store'
import { update } from '@/store/src/edit'

import './index.less'

interface ItemType {
  color: string
  component: string
  props: {
    dataSource?: any
    columns?: any
  }

  children?: ReactNode
}
function Container() {
  const updatedValue = useAppSelector((state) => state.edit.value)

  const [item, setItem] = useState<ItemType[]>([])

  const ref = useRef(null)
  const dispatch = useAppDispatch()

  const [, drop] = useDrop(() => {
    return {
      accept: 'box',

      drop(item1: any) {
        setItem((item) => [...item, item1])
        dispatch(update({ ...item1.props }))
      }
    }
  })
  drop(ref)

  useEffect(() => {
    updatedValue &&
      setItem((item) => {
        item[0].props = updatedValue
        return [...item]
      })
  }, [updatedValue])

  return (
    <div ref={ref} className="container">
      {item.map((child, index) => {
        if (child.component == 'table') {
          return (
            <div
              key={`${child.component}-${index}`}
              onClick={() => {
                console.log('child.component', child.props.dataSource)
              }}
            >
              <SharedContainerTable
                dataSource={child.props.dataSource}
                columns={child.props.columns}
              />
            </div>
          )
        } else if (child.component == 'box') {
          return (
            <div
              onClick={() => {
                console.log('child.component', child.component)
              }}
            >
              <SharedBox key={`${child.component}-${index}`} />
            </div>
          )
        } else if (child.component == 'progress') {
          return <SharedProgressComponent key={`${child.component}-${index}`} />
        } else if (child.component == 'form') {
          return (
            <div key={`${child.component}-${index}`}>
              <SharedForm data={[]}></SharedForm>
            </div>
          )
        }
      })}
    </div>
  )
}
export default Container
