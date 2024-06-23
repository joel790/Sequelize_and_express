
const userModel = require("../model/user.model")
const bcrypt = require("bcrypt")
const getUsers = (req, res) => {
    userModel.findAll().then((data) => {
        res.send(data)
    }).catch((error) => {

        res.send("Unable to fetch users")
    })
}

const getUser = (req, res) => {
    const id = req.params.id

    userModel.findByPk(id).then((data) => {
        res.send(data)

    }).catch((error) => {

        res.send("Unable to fetch user")
    })


}
const createuser = (req, res) => {
    const { username, password, email } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashedPassord = bcrypt.hashSync(password, salt)
    const user = {
        username: username,
        password: hashedPassord,
        email: email
    }


    userModel.create(user).then((data) => {
        {
            res.send(data)

        }
    }).catch((error) => {
        res.send("Error happended")

    })

}
const updateUser = (req, res) => {
    const id = req.params.id
     const user=req.body
    userModel.update(user,{where:{id:id}}).then((data) => {
     if(data==1){
     res.send("Udated successfully")

     }
     else{

        res.send(`Unable to get user with id ${id}`)
     }


    }).catch((error) => {

        res.send("Unable to fetch user")
    })


}


const deleteUser=(req,res)=>{
 const userId=req.params.id
userModel.destroy({where:{
  id:userId
}}).then((data)=>{
   if(data==1){
   res.status(200).send("deleted successfully")
   }
   else{
    res.send(`Unable to find user with id of ${userId}`)
   }

}).catch((error)=>{
res.send("error happened")

})
}






module.exports = { getUsers, getUser, createuser,updateUser,deleteUser }