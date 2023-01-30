import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Billings from '../Pages/Billings';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PrivateRoute from '../utils/PrivateRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <PrivateRoute>
            <Billings />
          </PrivateRoute>
        ),
      },
      //     {
      //       path: "/jobs",
      //       element: <Jobs />,
      //     },
      //     {
      //       path: "/job-details/:id",
      //       element: <JobDetails />,
      //     },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/register',
        element: <PrivateRoute></PrivateRoute>,
      },
      //     {
      //       path: "/register/:type",
      //       element: (
      //         <PrivateRoute>
      //           <AccountCreator />
      //         </PrivateRoute>
      //       ),
      //     },
      //   ],
      // },
      // {
      //   path: "/dashboard",
      //   element: (
      //     <PrivateRoute>
      //       <Dashboard />
      //     </PrivateRoute>
      //   ),
      //   children: [
      //     {
      //       path: "add-job",
      //       element: <AddJob />,
      //     },
      //     {
      //       path: "employer",
      //       element: <EmployerDashboard />,
      //     },
      //     {
      //       path: "candidate",
      //       element: <CandidateDashboard />,
      //     },
    ],
  },
]);

export default routes;
