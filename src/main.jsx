import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import Router from './router'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <Router></Router>
 </BrowserRouter> ,
)
