import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import 'virtual:uno.css'
import './global.scss'
=======
import { App } from './App'
>>>>>>> master

const div = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(div)
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <RouterProvider router={router} />
  </React.StrictMode>
)
=======
    <App />
  </React.StrictMode>
)
export { div as rootDiv }

>>>>>>> master
