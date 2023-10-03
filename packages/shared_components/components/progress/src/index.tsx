import React, { Ref } from 'react'
import type { FC, ReactNode } from 'react'

import type { FormItemProps } from 'antd'

import styles from './index.module.less'

interface IProps extends FormItemProps {
  r?: number
  style?: any
  fill?: string
  stroke?: string
  strokeWidth?: string
  strokeDasharray?: number
  strokeDashoffset?: number
  children?: ReactNode
}

const ProgressComponentRef: FC<IProps> = (
  {
    r = 100,
    style,
    fill = 'none',
    stroke = 'black',
    strokeWidth = '5',
    strokeDashoffset = 50
  },
  ref?: Ref<any>
) => {
  const totalLen = 2 * 3.14 * r
  const currentLen = ((100 - strokeDashoffset) / 100) * totalLen

  return (
    <svg
      ref={ref}
      width={200 + Number(strokeWidth) * 2}
      height={200 + Number(strokeWidth) * 2}
      style={style}
    >
      <circle
        cx={r + Number(strokeWidth)}
        cy={r + Number(strokeWidth)}
        r={r}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={totalLen}
        strokeDashoffset={currentLen}
      ></circle>
    </svg>

    // <div ref={ref}>
    //   <div className={styles['box']}>
    //     <div className={styles['percent']}>
    //       <svg>
    //         <circle cx={cx} cy={cx} r={cx}></circle>
    //         <circle cx={cx} cy={cx} r={cx}></circle>
    //       </svg>
    //       <div className={styles['number']}>
    //         <h2>
    //           87<span>%</span>
    //         </h2>
    //       </div>
    //     </div>
    //     <h2 className={styles['text']}>Progress</h2>
    //   </div>
    // </div>
  )
}

const ProgressComponent = React.forwardRef(
  ProgressComponentRef as unknown as (
    props: IProps & { ref?: any }
  ) => React.ReactElement
)

export default ProgressComponent
