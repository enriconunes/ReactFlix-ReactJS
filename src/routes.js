import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Favoritos from "./components/Favoritos";

export default function RoutesApp(){

    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element= { <Home /> } />
                <Route path="/filme/:id" element= { <Filme /> } />
                <Route path="/favoritos" element= { <Favoritos /> } />
                
                <Route path="*" element= { <NotFound /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}