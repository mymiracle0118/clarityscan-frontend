import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {AppRouter} from "./components/router/AppRouter"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
