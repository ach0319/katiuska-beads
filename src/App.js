import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Bracelet from "./Components/Product Page/Bracelet";
import Earring from "./Components/Product Page/Earring";
import Waistbeads from "./Components/Product Page/Waistbeads";
import Headbeads from "./Components/Product Page/Headbeads";
import Kid from "./Components/Product Page/Kid";
import Men from "./Components/Product Page/Men";
import Plus from "./Components/Product Page/Plus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
    return(
        <Router>
            <div>
                <header>
                    <Navbar/>
                </header>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/bracelet" element={<Bracelet/>} />
                    <Route path="/earring" element={<Earring/>} />
                    <Route path="/headbeads" element={<Headbeads/>} />
                    <Route path="/kid" element={<Kid/>} />
                    <Route path="/men" element={<Men/>} />
                    <Route path="/plus" element={<Plus/>} />
                    <Route path="/waistbeads" element={<Waistbeads/>} />
                    <Route path="/contact" element={<About/>} />
                    
                </Routes>
            </div>
        </Router>
    )
}

export default App;