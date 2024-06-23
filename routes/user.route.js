const express=require("express")

const userController=require("../controllers/user.controller")
const router=express.Router()

router.get("/getUsers",userController.getUsers)
router.get("/getUser/:id",userController.getUser)

router.post("/createUser",userController.createuser)
 
router.put("/udateUser/:id",userController.updateUser)


router.delete("/deleteUser/:id",userController.deleteUser)

module.exports=router

