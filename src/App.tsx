import React from "react";

import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import SummaryDay from "./pages/SummaryDay";
import Menu from "./pages/Menu";
import SummaryOfSingleTable from "./pages/SummaryOfSingleTable";
import ProductView from "./pages/ProductView";
import AddMenuPage from "./pages/AddMenuPage";

function App() {


    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/summary" element={<SummaryDay/>}/>
                <Route path="/add" element={<AddMenuPage/>}/>
                <Route path="/menu/:id" element={<ProductView/>}/>
                <Route path="/:slug" element={<SummaryOfSingleTable/>}/>
            </Routes>
        </div>
    );
}

export default App;
