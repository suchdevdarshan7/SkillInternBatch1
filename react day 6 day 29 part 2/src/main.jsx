import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CarComponent from './Components/CarComponent.jsx'
import Button from './Components/Button.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/car',
    element: <CarComponent />
  },
  {
    path: '/button',
    element: <Button />
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
