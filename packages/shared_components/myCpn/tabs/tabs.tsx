import React, { Children, FC, ReactNode } from 'react'

interface TabPaneProps {
  tab?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  disabled?: boolean
  children?: React.ReactNode
  forceRender?: boolean
  closable?: boolean
  closeIcon?: React.ReactNode
  prefixCls?: string
  tabKey?: string
  id?: string
  animated?: boolean
  active?: boolean
  destroyInactiveTabPane?: boolean
}
export interface Tab extends Omit<TabPaneProps, 'tab'> {
  key: string
  label: React.ReactNode
}
interface ITabs {
  items: Tab[]
  children?: ReactNode
}
interface ITab {
  label: ReactNode
  children?: ReactNode
}
const Tab: FC<ITab> = ({ label, children }) => {
  return (
    <>
      <div>{label}</div>
      {/* <div>{children}</div> */}
    </>
  )
}
const Tabs: FC<ITabs> = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { key, children, label } = item
        return (
          <>
            <Tab label={label} key={key}></Tab>
            <div> {children}</div>
          </>
        )
      })}
    </>
  )
}
export default Tabs
