
import ItemListContainer from "./components/itemlistContainer/ItemListContainer"
import NavBar from "./components/navBar/NavBar"
import ItemCount from "./components/itemcount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import Cart from "./components/cart/Cart"

import './App.css'
import cart from "./components/cart/Cart"

function App() {

  return (
    <BrowserRouter>
      <div className='div'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
          <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element= {<Navigate to="/" />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App
