import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import Structure from './Components/Structure'
import { Chart } from 'chart.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Structure/> */}
  </React.StrictMode>,
)
