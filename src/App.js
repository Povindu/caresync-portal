import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components

import Users from "./pages/Users/Users";
import Drawer from "./pages/Drawer/Drawer";
import ViewDoctors from "./pages/ViewDoctors/ViewDoctors";
import ViewPatients from "./components/ViewPatients/ViewPatients";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";

import "./App.css";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar/> */}
        <Drawer
          Inp={
            <div className="pages">
              <Routes>
                {/* <Route path="/" element={<Dashboard />} /> */}
                <Route
                  path="/"
                  element={user ? <h1>test <br/> test test <br/> testtest <br/> testtest <br/> test</h1> : <Navigate to="/login" />}
                />
                <Route path="/doctors" element={<Users type={"doctors"} />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/patients" element={<ViewPatients />} />
                <Route path="/users" element={<ViewDoctors />} />
              </Routes>
            </div>
          }
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
