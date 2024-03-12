import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Homepage/Homepage'
import NavBar from './components/NavBar/NavBar';
import Users from './pages/Users/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/doctors"
              element={<Users type={"doctors"} />}
            />
            <Route 
              path="/patients"
              element={<Users type={"patients"} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
