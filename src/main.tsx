import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './compnents/layout/Navbar.tsx'

createRoot(document.getElementById('root')!).render(

  
  <StrictMode>
    <Navbar />
  </StrictMode>,
)
