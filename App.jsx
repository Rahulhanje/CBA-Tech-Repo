import { useState } from 'react'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import { Routes, Route } from 'react-router-dom'

import { BrowserRouter } from 'react-router-dom'

function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false);


  return (
    <BrowserRouter> <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
 
    </BrowserRouter>
  );
}

export default App
