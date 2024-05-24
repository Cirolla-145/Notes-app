import express from "express"
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'

import notesRoutes from './routes/notesRoutes.js'
import authRoutes from "./routes/authRoutes.js"
import connectToMongo from "./db/connectToMongo.js"

const app=express()

dotenv.config()
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 2505

app.use('/api/auth',authRoutes)
app.use('/api/notes',notesRoutes)



app.listen(PORT,()=>{
    connectToMongo()
    console.log(`server running on port ${PORT}`)
})