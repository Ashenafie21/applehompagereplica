import React from "react";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/Pages/Shared/SharedLayout"; 
import Mac from "./components/Pages/Mac/Mac";
import Cart from "./components/Pages/cart/cart";
import Support from "./components/Pages/Support/Support";
import Music from "./components/Pages/MUsic/Music";
import Watch from "./components/Pages/Watch/Watch";
import Ipad from "./components/Pages/Ipad/Ipad";
import Tv from "./components/Pages/TV/Tv";
import Four04 from "./components/Pages/Four04/Four04";
import Search from "./components/Pages/Search/Search";
import Iphone from "./components/Pages/Iphone/Iphone";
import ProductPage from "./components/Pages/ProdcuctPage/ProductPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main />} />
        <Route path="mac" element={<Mac />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="iphone/:productID" element={<ProductPage />} /> 
        <Route path="ipad" element={<Ipad />} />
        <Route path="watch" element={<Watch />} />
        <Route path="tv" element={<Tv />} />
        <Route path="music" element={<Music />} />
        <Route path="support" element={<Support />} />
        <Route path="search" element={<Search />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Four04 />} />
      </Route>
    </Routes>
  );
}

export default App;
