import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Filmes from './Pages/Filmes.jsx'
import Contato from './Pages/Contato.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import DetalhesFilme from './Pages/DetalhesFilme.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/", 
      element: <App/>,
      children: [
        {index: true, element: <Home/>},
        {path: "/:id", element: <DetalhesFilme/>},
        {path: "filmes", element:<Filmes/>},
        {path: "filmes/:id", element: <DetalhesFilme/>},
        {path: "contato", element:<Contato/>},
        {path: "favoritos/:id", element:<DetalhesFilme/>},
        {path: "*", element:<PageNotFound/>},
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)