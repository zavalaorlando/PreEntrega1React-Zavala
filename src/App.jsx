import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ItemListContainer greeting= "Lofana Store"/>
    </>
  )
}

export default App
