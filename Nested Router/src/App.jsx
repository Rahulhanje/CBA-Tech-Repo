import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import DashboardHome from './components/DashboardHome';
import DashboardSettings from './components/DashboardSettings';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="home" element={<DashboardHome />} />
        <Route path="settings" element={<DashboardSettings />} />
      </Route>
    </Routes>
  </>
);

export default App;
