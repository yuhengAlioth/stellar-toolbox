import '@icon-park/react/styles/index.css' // icon-park icon
import '@renderer/assets/global.scss'
// import '@renderer/assets/main.css'
import '@renderer/assets/tailwindcss.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
