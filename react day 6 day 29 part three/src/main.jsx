import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Navbar from './Components/Navbar.jsx'
import Random from './Components/Random.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/nav',
    element:<Navbar/>
  },
  {
    path:'/random',
    element:<Random/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
     <App />
    </RouterProvider>
  </React.StrictMode>,
)
