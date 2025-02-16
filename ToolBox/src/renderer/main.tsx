import '@icon-park/react/styles/index.css' // icon-park icon
import '@renderer/assets/global.scss'
import '@renderer/assets/main.css'
import '@renderer/assets/tailwindcss.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router'
import App from './App'
import Versions from './components/Versions'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="version" element={<Versions />} />
      </Routes>
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
