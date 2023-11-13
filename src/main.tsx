import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import routes from './router/RouterConfig'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App routes={routes} />
  </React.StrictMode>
)




