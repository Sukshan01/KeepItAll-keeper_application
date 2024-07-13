import React, { useState, useEffect } from 'react'
import AddKeeper from './components/AddKeeper/AddKeeper'
import Header from './components/Header/Header'
import './App.css'
import ShowKeeper from './components/ShowKeeper/ShowKeeper'
import axios from 'axios'



const App = () => {
  const [keeperList, setKeeperList] = useState([])

  useEffect(() => {
      axios.get("https://keepitall-keeper-application-backend.onrender.com/api/getAll")
      .then(res => setKeeperList(res.data))
  }, [])

  return (
    <div className='App'>

      <Header />
      <AddKeeper keeperList={keeperList} setKeeperList={setKeeperList} />
      <ShowKeeper keeperList={keeperList} setKeeperList={setKeeperList}/>
    </div>
  )
}

export default App
