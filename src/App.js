import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

const App = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    {/* otras rutas */}
  </Routes>
);

export default App;
