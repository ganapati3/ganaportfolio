import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const isProduction = process.env.NODE_ENV === 'production';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     errorElement : <Error/>
//   }
// ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={isProduction ? '/ganaportfolio':'/'}>
        <App/>
      </BrowserRouter>
  </StrictMode>,
)
