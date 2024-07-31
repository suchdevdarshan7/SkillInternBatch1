import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Products from './Components/Products.jsx'
import Product from './Components/Product.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<><Navbar/><App/></>
  },
  {
    path:"/:slug",
    element:<><Navbar/> <Product/></>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
