import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { crew, destinations, technology } from "./data.json";
import { Home, Destination, Crew, Technology } from "./pages";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
