import Form from "./components/Form";
import Navbar from "./components/Navbar";
import React from "react";
// import ReactDOM from 'react-dom'
// import axios from "axios";
import Hero from "./components/Hero";
import Canvas from "./components/Canvas";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
           <BrowserRouter>
           <Routes>
                <Route path="/" element={
                    <>
                     <Navbar />
                     <Hero />
                      <Form />
                    
                      <About />
                      <Footer />
                    </>
                }></Route>

                <Route path="/canvas" element={
                    <>
                    <Navbar />
                    <Canvas width={700} height={500} />
                    <Footer />
                    </>

                }></Route>
           </Routes>
           </BrowserRouter>
        </div>
    );
}

export default App;
