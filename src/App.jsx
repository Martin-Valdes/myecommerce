
import ItemListContainer from "./components/itemlistContainer/ItemListContainer"
import NavBar from "./components/navBar/NavBar"
import ItemCount from "./components/itemcount/itemcount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div className='div'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
          <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
          <Route path="*" element= {<Navigate to="/" />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App
