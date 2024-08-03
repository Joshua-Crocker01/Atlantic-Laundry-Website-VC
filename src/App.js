import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import Products from "./pages/products";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/atlanticLaundry.css'
 
function App() {
    return (
      <>
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </Router>
      </>
    );
}
 
export default App;