import React, { CSSProperties, Ref, useMemo } from 'react'
import type { FC, ReactNode } from 'react'
import { Form, Col } from 'antd'
import type { FormItemProps } from 'antd'

import styles from './index.module.less'

interface IProps extends FormItemProps {
  label?: string
  style?: CSSProperties
  className?: string
  isSelect?: boolean
  noMargin?: boolean
  col?: number
  childre?: ReactNode
}

const WrapFormComponentRef: FC<IProps> = (
  { children, isSelect, className, style, noMargin = true, ...props },
  ref?: Ref<any>
) => {
  const labelWidth = useMemo(() => {
    if (!isSelect || !props.label) return 11
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d') as any
    context.font = '12px PingFang SC'
    const metrics = context.measureText(props.label)
    return (
      metrics.width + (props.colon === undefined || props.colon ? 10 : 0) + 11
    )
  }, [isSelect, props.label, props.colon])

  return (
    <Col span={6} ref={ref}>
      <Form.Item
        style={
          {
            '--label-length': labelWidth + 'px',
            marginBottom: noMargin ? 0 : '16px',
            ...style
          } as CSSProperties
        }
        className={`${className || ''} ${styles['wrap-form-select']}  ${
          styles['wrap-form']
        } `}
        {...props}
      >
        {children}
      </Form.Item>
    </Col>
  )
}

const WrapFormComponent = React.forwardRef(
  WrapFormComponentRef as unknown as (
    props: any & { ref?: any }
  ) => React.ReactElement
)

export default WrapFormComponent
