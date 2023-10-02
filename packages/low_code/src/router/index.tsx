import React from 'react'

import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Index = React.lazy(() => import('@/views'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/index" />
  },
  {
    path: '/index',
    element: <Index />
  }
]

export default routes
