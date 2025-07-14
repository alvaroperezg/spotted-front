import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import '@/i18n'
import '@/styles/tailwind.css'
import App from './App'
import { TranslationProvider } from '@/application/contexts/TranslationContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TranslationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TranslationProvider>
  </StrictMode>,
)
