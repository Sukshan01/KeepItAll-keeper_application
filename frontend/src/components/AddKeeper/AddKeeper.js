import React, { useState } from 'react'
import './AddKeeper.css'

import axios from 'axios'

const AddKeeper = ({ setKeeperList }) => {

    const [KeeperObj, setKeeperObj] = useState({
        title: "",
        description: ""
    })

    const handleChange = e => {
        const {name, value } = e.target
        setKeeperObj({
            ...KeeperObj,
            [name]: value
        })
    }

    const add = () => {
        if(KeeperObj.title){
       axios.post("https://keepitall-keeper-application-backend.onrender.com/api/addNew", KeeperObj)
       .then(res => setKeeperList(res.data))
       setKeeperObj({ title: '', description: '' });
    }
}
  return (
    <div className='addKeeper'>
     <input className='inputBox titleInput'
     type="text"
     name='title'
     autoComplete='off'
     placeholder='Add Title'
     onChange={handleChange}
     value={KeeperObj.title}

/>

<textarea
className='inputBox description'
name="description"
placeholder='Add Description Here'
onChange={handleChange}
value={KeeperObj.description}
/>

<div className='addButton' onClick={add}>Add</div>
</div>
  )
}

export default AddKeeper
