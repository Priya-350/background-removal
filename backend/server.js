import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import "dotenv/config"
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI/bg-removal);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Database connection error:', err);
    throw err; // Ensure errors are thrown if the connection fails
  }
};
const PORT=process.env.PORT||4000
const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("api is working...")
})

app.listen(PORT,()=>{
    console.log("server is running on port "+PORT)
})
