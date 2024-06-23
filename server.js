const express=require("express")
const dotenv=require("dotenv").config()
const userRoute=require("./routes/user.route")
const app=express()
const sequelize=require("./config/db.config")
app.use(express.json())

 sequelize.sync().then(()=>{
  console.log("sync database")

 }).catch((error)=>{

    console.log(error)
 })

app.use("/users",userRoute)
const port=process.env.PORT
app.get("/",(req,res)=>{
  res.send("Hello world")
})

app.listen(port,()=>{
  console.log(`Server is running on this port ${port}`)

})