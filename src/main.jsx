import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './style.css'
// import Greeting from './Greeting.jsx'
import Cards from './Cards.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Greeting/> */}
    <Cards/>
  </StrictMode>,
)