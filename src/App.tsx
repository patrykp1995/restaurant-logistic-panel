import React from "react";
import "./App.css";

import MenuItems from "./components/Menu/MenuItems";
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import SummaryDay from "./pages/SummaryDay";
import Menu from "./pages/Menu";

function App() {


    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/summary" element={<SummaryDay/>}/>
            </Routes>
        </div>
    );
}

export default App;
