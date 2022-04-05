
const req = require("express/lib/request");

const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

console.log("hyy today is monday ");
// creating an user 
 exports.create =async(req, res) => {
  console.log("going to create user!");
  const Users = req.body;
console.log(Users.first_name );
const abc  =
({
  first_name : Users.first_name,
  
  last_name : Users.last_name,
  
  email_id : Users.email_id
})
console.log(abc);
try 
{
  const a1 =  await  User.create(abc);
  console.log(a1);
 
  res.status(200).json({'message':"Data save","data": a1})

    }catch(err){
        res.json({"error":err});
    }

 }
  //// get AllUser by id 
  exports.getAllUsers = async (req, res) => {

    // const id = req.params.id ; 
    const Tutorial =  await User.findAll();
  
    try{
    
      res.send(Tutorial);
    console.log(Tutorial);
     
    
    } catch (err) {
        console.log(err);
    }
  }


  // get users by id 
  exports.getUserById = async(req , res  ) =>
  {
    
    console.log()
    try{
     
    const Tutorial = await User.findAll({
    where : {
       id : req.params.id
    }
    });
      res.send(Tutorial[0]);
      }catch(err){
      console.log(err);
    }
  }


  // update user by id 
exports.updateById = async(req,res) =>
{
   const  Users = new User();
       try {
           await Users.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.send({
            "message": "User Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// delete user by id 
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

    
  
   

   


    
