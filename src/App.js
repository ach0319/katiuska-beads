import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Product from "./Components/Product Page/Product";

function App() {
    return(
        <div>
            <header>
                <Navbar/>
            </header>
                <Home/>
                <Product/>
        </div>
        
    )
}

export default App;