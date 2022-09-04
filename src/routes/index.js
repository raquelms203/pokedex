import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../pages/Home"

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
