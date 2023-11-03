
import "./App.css";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";
import LoginPage from "./authenticComponents/Login";

function App() {
  const router = createBrowserRouter([
    // { path: "/login", element: <LoginPage /> },
    { path: "/", element: <LoginPage /> },
    { path: "/read", element: <Read /> },
    { path: "/edit/:id", element: <Update /> },
    { path: "/Create", element: <Create /> },
  ]);

  const isLoginPage = window.location.pathname === "/";  

  return (
    <div className="container">
      {isLoginPage ? null : <Navbar />}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
