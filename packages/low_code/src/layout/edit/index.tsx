import React, { useEffect, useRef } from 'react'

import { EditorState } from '@codemirror/state'
import { EditorView, keymap, ViewUpdate } from '@codemirror/view'
import { defaultKeymap } from '@codemirror/commands'
import { basicSetup } from 'codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { json } from '@codemirror/lang-json'

import { message, Tabs } from 'antd'

import type { TabsProps } from 'antd'

import { isCodemirrorJSON } from '@/utils'

import { useAppDispatch, useAppSelector } from '@/store'
import { update } from '@/store/src/edit'

import { SharedContainerTableStr } from '@motorepo/component'
function LowCodeEdit() {
  const ref = useRef<any>(null)
  // const tabFalg = useState(0)

  const updatedValue = useAppSelector((state) => state.edit.value)
  const dispatch = useAppDispatch()
  const data = JSON.stringify(updatedValue, null, 2)
  const strData = `${data}`

  let tempDoc = `${data}`
  const onUpdateExt = EditorView.updateListener.of((v: ViewUpdate) => {
    if (v.docChanged) {
      tempDoc = v.state.doc.toString()
    }
  })

  const saveState = () => {
    const res = isCodemirrorJSON(tempDoc)
    if (res === true) {
      dispatch(update(JSON.parse(tempDoc)))
      message.success('保存成功')
    } else {
      console.log(res)
      message.error(`json格式错误: ${res}`)
    }
  }

  function downloadFile(data, fileName, fileType?) {
    const blob = new Blob([data], {
      type: fileType
    })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = fileName

    document.body.appendChild(a)
    a.click()

    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const exportFile = async () => {
    downloadFile(SharedContainerTableStr, 'MyComponent.tsx', 'text/typescript')
    downloadFile(data, 'MyData.json')
  }
  useEffect(() => {
    const startState = EditorState.create({
      doc: strData,
      extensions: [
        keymap.of(defaultKeymap),
        basicSetup,
        javascript(),
        json(),
        onUpdateExt
      ]
    })
    const view = new EditorView({
      state: startState,
      parent: ref.current
    })
    return () => {
      view?.destroy()
    }
  }, [strData])

  const onChange = (key: string) => {
    console.log(key)
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '属性',
      children: 'Content of Tab Pane 1'
    },
    {
      key: '2',
      label: '数据',
      children: 'Content of Tab Pane 2'
    }
  ]

  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

      <div>
        <button onClick={saveState}>保存</button>
        <button onClick={exportFile}>导出</button>
      </div>

      <div></div>
      <div ref={ref}></div>
    </div>
  )
}
export default LowCodeEdit
