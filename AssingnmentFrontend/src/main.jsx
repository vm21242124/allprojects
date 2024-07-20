
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLanding from './ui/MainLanding.jsx'
import PatientDashboard from './ui/Patient/PatientDashboard.jsx'
import DoctorDashboard from './ui/Doctor/DoctorDashboard.jsx'
import DoctorLogin from './ui/Doctor/DoctorLogin.jsx'


const router=createBrowserRouter([
  {
    path:"/",
    element:<MainLanding/>
  },
  {
    path:"/patient",
    element: <PatientDashboard/>
  },
  {
    path:"/doctor",
    element:<DoctorDashboard/>
  },
  {
    path:"/login/doctor",
    element:<DoctorLogin/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
);
