import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NewPackage from "./pages/NewPackage";
import EditPackage from "./pages/EditPackage";
import { useLoggedInStatus } from "./hooks";

function App() {

  const isLoggedIn = useLoggedInStatus()

  return (
    <>
      <div className="container mx-auto py-6 sm:py-12">
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <Home />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <Dashboard firstName="Thato" />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/new-package"
            element={
              isLoggedIn ? (
                <NewPackage />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/edit-package/:packageId"
            element={
              isLoggedIn ? (
                <EditPackage />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
