import React from "react";
import './ShowKeeper.css'
import axios from "axios";

const ShowKeeper = ({ keeperList, setKeeperList }) => {


    const deleteKeeper = (id) => {
        axios.post("https://keepitall-keeper-application-backend.onrender.com/api/delete", { id })
        .then(res => setKeeperList(res.data))


    }

return(
    <div className="showKeeper row">

        {
            keeperList.map(keeper => (

                <div className="keeperCard col-md-3" key={keeper._id}>
            <h1 className="title">
                {keeper.title}
                 <i className="deleteIcon fa-solid fa-trash" onClick={() => deleteKeeper(keeper._id)}></i>
                 </h1>
            <textarea className="descriptionBox" value={keeper.description} readOnly/>
                
               </div>

            ))
        }
        
        
    </div>
)
}

export default ShowKeeper