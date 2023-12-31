import ReactDOM from 'react-dom/client'
import * as bootstrap from 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
