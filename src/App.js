import React from "react";
import TreeData from "./pages/TreeData";
import Comparison from "./pages/comparison";
import Layout from "./pages/layout";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={< TreeData/>} />
          <Route path="compare" element={<Comparison />} />
      
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
