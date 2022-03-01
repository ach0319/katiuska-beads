import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Product from "./Components/Product Page/Product";
import Product06 from "./Components/ProductCom/Product06";

function App() {
    return(
        <div>
            <header>
                <Navbar/>
            </header>
                <Home/>
                <Product/>
                <Product06/>
        </div>
        
    )
}

export default App;