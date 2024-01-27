import React from "react";
import { Routes, Route } from "react-router-dom";
import { DetailBookPage, HomePage } from "./page";
import { NavComponent } from "./components";
import NotFound from "../not-found";

const App = () => {
  return (
    <div className="main">
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailBookPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
