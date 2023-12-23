
import ItemListContainer from "./components/itemlistContainer/ItemListContainer"
import NavBar from "./components/navBar/NavBar"
import ItemCount from "./components/itemcount/itemcount"
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"



function App() {

  return (
    
      <div className='div'>
        <NavBar/>
        <ItemListContainer prop="hola"/>
        <ItemDetailContainer/>
      </div>
  )
}

export default App
