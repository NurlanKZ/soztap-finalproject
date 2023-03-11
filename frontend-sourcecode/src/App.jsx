import './App.css'
import Menu from './components/menu/index.jsx'
import Games from './components/games/index.jsx'
import Game1 from './components/games/game1/index.jsx'
import Game2 from './components/games/game2/index.jsx'
import Rewards from './components/rewards/index.jsx'
import Database from './components/database/index.jsx'
import Author from './components/author/index.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/game' element={<Games/>}/>
        <Route path='/game/1' element={<Game1/>}/>
        <Route path='/game/2' element={<Game2/>}/>
        <Route path='/database' element={<Database/>}/>
        <Route path='/rewards' element={<Rewards/>}/>
        <Route path='/about' element={<Author/>}/>
      </Routes>
    </>
  )
}

export default App
