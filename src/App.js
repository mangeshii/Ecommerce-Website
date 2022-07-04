
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./ProductListing/ProductListing";
import ProductDetails from "./ProductDetails/ProductDetails"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProductListing />}></Route>
          <Route path="/product/:productid" element={<ProductDetails />}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
