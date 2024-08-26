import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import Dryers from "./pages/productPages/dryers";
import Washers from "./pages/productPages/washers";
import Specialty from "./pages/productPages/specialty";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/atlanticLaundry.css';

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/products/dryers" element={<Dryers />} />
                        <Route path="/products/washers" element={<Washers />} />
                        <Route path="/products/specialty" element={<Specialty />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </>
    );
}

export default App;
