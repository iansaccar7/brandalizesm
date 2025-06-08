import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importando o BrowserRouter
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './index.css';

// Adicionando o basename para o BrowserRouter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/brandalizesm">  {/* Definindo o basename */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
