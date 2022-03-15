import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product01 from "./Components/ProductCom/Product01";
import Product02 from "./Components/ProductCom/Product02";
import Product03 from "./Components/ProductCom/Product03";
import Product04 from "./Components/ProductCom/Product04";
import Product05 from "./Components/ProductCom/Product05";
import Product06 from "./Components/ProductCom/Product06";
import Product07 from "./Components/ProductCom/Product07";
import Product08 from "./Components/ProductCom/Product08";
import Product09 from "./Components/ProductCom/Product09";
import Product10 from "./Components/ProductCom/Product10";
import Product11 from "./Components/ProductCom/Product11";
import Product12 from "./Components/ProductCom/Product12";
import Product13 from "./Components/ProductCom/Product13";
import Product15 from "./Components/ProductCom/Product14";
import Product16 from "./Components/ProductCom/Product15";
import Product17 from "./Components/ProductCom/Product16";
import Product18 from "./Components/ProductCom/Product17";
import Product19 from "./Components/ProductCom/Product18";
import Product20 from "./Components/ProductCom/Product19";
import Product21 from "./Components/ProductCom/Product20";
import Product22 from "./Components/ProductCom/Product21";
import Product23 from "./Components/ProductCom/Product22";
import Product24 from "./Components/ProductCom/Product23";
import Product25 from "./Components/ProductCom/Product24";
import Product26 from "./Components/ProductCom/Product25";
import Product27 from "./Components/ProductCom/Product26";
import Product28 from "./Components/ProductCom/Product27";
import Product29 from "./Components/ProductCom/Product28";
import Product30 from "./Components/ProductCom/Product29";
import Product31 from "./Components/ProductCom/Product30";
import Product32 from "./Components/ProductCom/Product31";
import Product33 from "./Components/ProductCom/Product32";
import Product34 from "./Components/ProductCom/Product33";
import Product35 from "./Components/ProductCom/Product34";
import Product36 from "./Components/ProductCom/Product35";
import Product38 from "./Components/ProductCom/Product36";
import Product39 from "./Components/ProductCom/Product37";
import Product40 from "./Components/ProductCom/Product38";
import Product41 from "./Components/ProductCom/Product39";
import Product42 from "./Components/ProductCom/Product40";
import Product43 from "./Components/ProductCom/Product41";
import Product44 from "./Components/ProductCom/Product42";
import Product45 from "./Components/ProductCom/Product43";
import Product46 from "./Components/ProductCom/Product44";
import Product47 from "./Components/ProductCom/Product45";
import Product48 from "./Components/ProductCom/Product46";
import Product49 from "./Components/ProductCom/Product47";



function App() {
    return(
        <Router>
            <div>
                <header>
                    <Navbar/>
                </header>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/contact" element={<About/>} />
                    <Route path="/prod1" element={<Product01/>} />
                    <Route path="/prod2" element={<Product02/>} />
                    <Route path="/prod3" element={<Product03/>} />
                    <Route path="/prod4" element={<Product04/>} />
                    <Route path="/prod5" element={<Product05/>} />
                    <Route path="/prod6" element={<Product06/>} />
                    <Route path="/prod7" element={<Product07/>} />
                    <Route path="/prod8" element={<Product08/>} />
                    <Route path="/prod9" element={<Product09/>} />
                    <Route path="/prod10" element={<Product10/>} />
                    <Route path="/prod11" element={<Product11/>} />
                    <Route path="/prod12" element={<Product12/>} />
                    <Route path="/prod13" element={<Product13/>} />
                    <Route path="/prod15" element={<Product15/>} />
                    <Route path="/prod16" element={<Product16/>} />
                    <Route path="/prod17" element={<Product17/>} />
                    <Route path="/prod18" element={<Product18/>} />
                    <Route path="/prod19" element={<Product19/>} />
                    <Route path="/prod20" element={<Product20/>} />
                    <Route path="/prod21" element={<Product21/>} />
                    <Route path="/prod22" element={<Product22/>} />
                    <Route path="/prod23" element={<Product23/>} />
                    <Route path="/prod24" element={<Product24/>} />
                    <Route path="/prod25" element={<Product25/>} />
                    <Route path="/prod26" element={<Product26/>} />
                    <Route path="/prod27" element={<Product27/>} />
                    <Route path="/prod28" element={<Product28/>} />
                    <Route path="/prod29" element={<Product29/>} />
                    <Route path="/prod30" element={<Product30/>} />
                    <Route path="/prod31" element={<Product31/>} />
                    <Route path="/prod32" element={<Product32/>} />
                    <Route path="/prod33" element={<Product33/>} />
                    <Route path="/prod34" element={<Product34/>} />
                    <Route path="/prod35" element={<Product35/>} />
                    <Route path="/prod36" element={<Product36/>} />
                    <Route path="/prod38" element={<Product38/>} />
                    <Route path="/prod39" element={<Product39/>} />
                    <Route path="/prod40" element={<Product40/>} />
                    <Route path="/prod41" element={<Product41/>} />
                    <Route path="/prod42" element={<Product42/>} />
                    <Route path="/prod43" element={<Product43/>} />
                    <Route path="/prod44" element={<Product44/>} />
                    <Route path="/prod45" element={<Product45/>} />
                    <Route path="/prod46" element={<Product46/>} />
                    <Route path="/prod47" element={<Product47/>} />
                    <Route path="/prod48" element={<Product48/>} />
                    <Route path="/prod49" element={<Product49/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;