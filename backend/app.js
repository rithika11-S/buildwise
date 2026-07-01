const express=require("express")
const cors = require("cors");
require("dotenv").config()
const cookieParser=require("cookie-parser")
const connectDb=require("./config/database")
connectDb()
const app=express()
app.use(cors({origin:true , credentials:true}));
app.use(express.json())
app.use(cookieParser())
port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server running in port ${port}`)
})

