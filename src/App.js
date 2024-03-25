import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
// import Users from "./pages/Users/Users";
import Drawer from "./pages/Drawer/Drawer";
import ViewDoctors from "./pages/ViewDoctors/ViewDoctors";
import ViewPatients from "./pages/ViewPatients/ViewPatients"
import Login from "./components/Login";
import CreateAdmin from "./components/CreateAdmin";
import Logout from "./components/Logout";
import AuthLandingPage from "./pages/AuthLandingPage/AuthLandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";

import "./App.css";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        {user ? (
          <Drawer
            Inp={
              <div className="pages">
                <Routes>
                  {user ? (
                    <>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/patients" element={<ViewPatients />} />
                      {/* <Route
                        path="/doctors"
                        element={<Users type={"doctors"} />}
                      /> */}
                      <Route path="/doctors" element={<ViewDoctors />} />
                    </>
                  ) : (
                    <>
                      <Route path="/" element={<Navigate to="/login" />} />
                      <Route
                        path="/patients"
                        element={<Navigate to="/login" />}
                      />
                      <Route
                        path="/doctors"
                        element={<Navigate to="/login" />}
                      />
                      <Route path="/users" element={<Navigate to="/login" />} />
                    </>
                  )}

                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/createAdmin" element={<CreateAdmin />} />
                  
                </Routes>
              </div>
            }
          />
        ) : (
          <AuthLandingPage />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
