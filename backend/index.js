import dotenv from 'dotenv'
dotenv.config();
const port = process.env.PORT || 4000;

import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())



// Database Connection with MongoDB

mongoose.connect(process.env.MONGO_URL)


const keeperSchema = mongoose.Schema({
    title: String,
    description: String
})

const keeper = new mongoose.model("Keeper", keeperSchema)

app.get("/api/getAll", async (req, res) => {

    try {
        const keeperList = await keeper.find({})
        res.status(200).send(keeperList)
    }
    catch (err){
        console.error(err)
        res.status(500).send("Failed to fetch keepers")
    }
})

app.post("/api/addNew", async (req, res) => {
    

    const { title, description } =  req.body

    const keeperObj = new keeper({
        title,
        description
    })

   

    await keeperObj.save();

    try {
        const keeperList = await keeper.find({})
        res.status(200).send(keeperList)
    }
    catch (err){
        console.error(err)
        res.status(500).send("Failed to fetch keepers")
    }


})

app.post("/api/delete", async (req, res) => {
    
    try {
            const { id } = req.body
            await keeper.deleteOne({ _id : id})
                
            const keeperList = await keeper.find({})
            res.status(200).send(keeperList)
            }
        catch (err){
            console.error(err)
            res.status(500).send("Failed to fetch keepers")
        }

    })


app.get("/", (req, res) => {
    res.send("Express App is Running")
})

app.listen(port, (error) => {

    if(!error){
    console.log("Backend Running on port 4000")
    }
    else{
        console.log("Error : " +error)
    }
})