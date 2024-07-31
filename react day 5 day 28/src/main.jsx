import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter,Router,RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Login from './Components/Login.jsx'
import Navbar from './Components/Navbar.jsx'
import Welcome from './Components/Welcome.jsx'
import Product from './Components/Product.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <><Navbar /><Home/></>,
  },
  {
    path:"/about",
    element: <><Navbar /><About/></>
  },
  {
    path:"/contact",
    element: <><Navbar /><Contact/></>
  },
  {
    path:"/contact/:slug",
    element:<><Navbar/> <Product/></>
  },
  {
    path:"/login",
    element: <> <Navbar /><Login/></>
  },
  {
    path:"/welcome",
    element: <> <Navbar /><Welcome/></>
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}>
      
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
