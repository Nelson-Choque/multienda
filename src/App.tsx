import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import { Product } from "./components/product/Product";
import { Store } from "./components/store/Store";
import { ColorProvider } from "./components/context/StyleContext";

function App() {
  return (
    <BrowserRouter>
      <ColorProvider>
        <Routes>
          <Route path="/" element={<Store />}></Route>
          <Route path="/:storeName" element={<Home />}></Route>
          <Route path="/:storeName/:productId" element={<Product />}></Route>
        </Routes>
      </ColorProvider>
    </BrowserRouter>
  );
}

export default App;
