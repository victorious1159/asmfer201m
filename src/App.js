import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";
import LoginPage from "./authenticComponents/Login";

function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <LoginPage/>},
    { path: "/", element: <Create /> },
    { path: "/read", element: <Read /> },
    { path: "/edit/:id", element: <Update /> },
  ]);
  return (
    <div className="container">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
