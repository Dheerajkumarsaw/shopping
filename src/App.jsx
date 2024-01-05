import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Items from "./components/Items";
import CheckoutPage from "./components/shopping/Checkout";

function App() {
  const [productType, setType] = useState();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Items />}></Route>
        <Route path="cart" element={<CheckoutPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
