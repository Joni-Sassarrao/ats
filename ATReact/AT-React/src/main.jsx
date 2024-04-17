import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import Contato from './Pages/Contato.jsx'
import Sobre from './Pages/Sobre.jsx'
import './index.css'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {index: true, element: <Home />},
    {
      path: '/contato',
      element: <Contato/>
    },
    {
      path: '/sobre',
      element: <Sobre/>
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ],
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
