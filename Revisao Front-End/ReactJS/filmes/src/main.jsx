import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UsuarioProvider from './context/UsuarioProvider.jsx';
import SenhaProvider from './context/SenhaProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioProvider>
      <SenhaProvider>
        <App />
      </SenhaProvider>
    </UsuarioProvider>
  </StrictMode>,
)
