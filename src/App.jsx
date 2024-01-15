
import ItemListContainer from "./components/itemlistContainer/ItemListContainer"
import NavBar from "./components/navBar/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import Cart from "./components/cart/Cart"
import { CartProvider } from "./context/CartContext"


import cart from "./components/cart/Cart"
import Checkout from "./components/Checkout/CheckOut"

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <div className='div'>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
            <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element= {<Navigate to="/" />}/>
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
export default App
