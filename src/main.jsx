import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
