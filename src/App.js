import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Homepage/Homepage'
import NavBar from './components/NavBar/NavBar';

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
