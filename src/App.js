import { useEffect, createContext } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import NewPackage from "./pages/NewPackage";
import EditPackage from "./pages/EditPackage";
import { useLoggedInStatus } from "./hooks/hooks";
import LoginForm from "./components/LoginForm/LoginForm";

export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setToken, setExpiry] = useLoggedInStatus();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const expiry = window.localStorage.getItem("expiry");
    setToken(token);
    setExpiry(expiry);
  }, [isLoggedIn]);

  return (
    <>
      <div className="container mx-auto py-6 sm:py-12">
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginForm />}
          />
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? <Dashboard firstName="Thato" /> : <Navigate to="/" />
            }
          />
          <Route
            path="/new-package"
            element={isLoggedIn ? <NewPackage /> : <Navigate to="/" />}
          />
          <Route
            path="/edit-package/:packageId"
            element={isLoggedIn ? <EditPackage /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
