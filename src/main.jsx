import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Route/Roots'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import AuthProvider from './Providers/AuthProvider'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <DndProvider backend={HTML5Backend}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}>
          </RouterProvider>
        </QueryClientProvider>
      </DndProvider>
    </AuthProvider>
  </React.StrictMode>
)
