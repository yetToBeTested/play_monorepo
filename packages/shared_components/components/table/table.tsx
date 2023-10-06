import React from 'react'
import { Table } from 'antd'

function SharedContainerTable({ dataSource, columns }: any) {
  return <Table dataSource={dataSource} columns={columns} />
}
export { SharedContainerTable }

export const SharedContainerTableStr = `import { Table } from 'antd'
import React, { ReactNode } from 'react'

function SharedContainerTable({ dataSource, columns }: any) {
  return <Table dataSource={dataSource} columns={columns} />
}

export default SharedContainerTable`
