import React from "react";
import { Suspense, useState } from "react";
import Login from "./component/Loginpage/Login";
import Header from "./component/Navbar/Header";
import Admintag from "./component/Admintag/Admintag";
import Dashboard from "./component/Dashboard/Dashboard";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
// const Dashboard = React.lazy(() => import("./component/Dashboard/Dashboard"));
function App() {
  const [issignupandlogin, setissignupandlogin] = useState(false);
  const Layout = () => {
    if (!issignupandlogin) {
      return <Navigate to="/login" />;
    } else {
      return (
        <>
          <Header />
          <Outlet />
        </>
      );
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/admin",
          element: <Admintag />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login setissignupandlogin={setissignupandlogin} />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
