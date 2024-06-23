const Sequelize=require("sequelize")
const sequelize=require("../config/db.config")

const User=sequelize.define("users",{
   username:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
   },
   password:{
   type:Sequelize.STRING,
    allowNull:false,
    unique:false
   },
   email:{
    type:Sequelize.STRING,
     allowNull:false,
     unique:false
   }

})

module.exports=User