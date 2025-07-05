import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';



import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
