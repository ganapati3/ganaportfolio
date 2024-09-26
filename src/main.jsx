import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     errorElement : <Error/>
//   }
// ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <App/>
      </BrowserRouter>
  </StrictMode>,
)
