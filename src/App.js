import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components_/login/Signup';
import Landingpage from './components_/login/Landingpage';
import Create from './components_/Ticket_handling/Create'; 
import Display from './components_/Ticket_handling/Display';
import DisplayTickets from './components_/Ticket_handling/DisplayTickets';
import TicketSubmitted from './components_/Ticket_handling/TicketSubmitted';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Landing Page (Home) */}
        <Route path="/" element={<Landingpage />} />

        {/* Route for the Sign-In/Sign-Up Page */}
        <Route path="/sign up" element={<Signup />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Display" element={<Display />} />
        <Route path="/List" element={<DisplayTickets />} />
        <Route path="/ticket-submitted" element={<TicketSubmitted />} />

      </Routes>
    </Router>
  );
}

export default App;
