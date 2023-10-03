import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import App from './App'
import 'normalize.css'

import '@/assets/css/index.less'
import store from '@/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </Provider>
  ) as any
)
