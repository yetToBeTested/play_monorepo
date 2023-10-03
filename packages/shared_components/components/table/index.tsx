import { Table } from 'antd'
import React, { ReactNode } from 'react'

function ContainerTable({ dataSource, columns }: any) {
  return <Table dataSource={dataSource} columns={columns} />
}

export default ContainerTable

export const ContainerTableStr = `import { Table } from 'antd'
import React, { ReactNode } from 'react'

function ContainerTable({ dataSource, columns }: any) {
  return <Table dataSource={dataSource} columns={columns} />
}

export default ContainerTable`
