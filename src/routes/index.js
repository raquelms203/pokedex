import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../pages/Home"
import PokemonDetail from "../pages/PokemonDetail";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/pokemon" element={<PokemonDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
