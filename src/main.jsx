import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import './index.css'
import App from './App.jsx'
import { EMAILJS } from './config/email'

emailjs.init({
  publicKey: EMAILJS.publicKey,
  blockHeadless: true,
  limitRate: {
    id: 'bluefox-contact',
    throttle: 10000,
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
