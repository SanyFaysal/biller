import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Billings from '../Pages/Billings';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,

    children: [
      {
        path: '/',
        element: <Billings />,
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
      //     {
      //       path: "/register",
      //       element: (
      //         <PrivateRoute>
      //           <AccountCreator />
      //         </PrivateRoute>
      //       ),
      //     },
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
