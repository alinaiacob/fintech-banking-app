import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MoralisProvider } from "react-moralis";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoralisProvider  appId="He1Wc2ZRdVTPFV8SSzzfLQX0orHZJrM0WIrdo2ZW" serverUrl="https://pvr0e7nvocrj.usemoralis.com:2053/server">
      <App/>
    </MoralisProvider>
    <App />
  </React.StrictMode>
)
