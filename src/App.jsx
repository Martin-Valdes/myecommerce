
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/navBar/NavBar"
import ItemCount from "./components/itemcount/itemcount"
import './App.css'



function App() {

  return (
    
      <div className='div'>
        <NavBar/>
        <ItemListContainer prop="hola"/>
        <ItemCount stock = {10} />
      </div>
  )
}

export default App
