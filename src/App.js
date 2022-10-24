import CartDrawer from "./components/CartDrawer";
import Drawer from "./components/Drawer";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from "./pages/products/Products";
import ProductDetail from "./pages/product-detail/ProductDetail";
import Checkout from "./pages/checkout/Checkout";
import Account from "./pages/account/Account";
import Login from "./pages/auth/Login";
import FAQ from "./pages/faq/FAQ";
import Contact from "./pages/contact/Conact";
import MobileNavBar from "./components/NavBars/MobileNavBar";

function App() {
  return (
    <div className="App relative">
      <Drawer />
      <CartDrawer />
      <MobileNavBar />
      <BrowserRouter> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="cart" element={<Cart />} />
          <Route  path="about" element={<About /> } />
          <Route  path="products" element={<Products /> } />
          <Route  path="product-detail" element={<ProductDetail /> } />
          <Route  path="checkout" element={<Checkout /> } />
          <Route  path="contact" element={<Contact /> } />
          <Route  path="faq" element={<FAQ /> } />
          <Route  path="account" element={<Account /> } />
          <Route  path="login" element={<Login /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
