const handleProfile=(req,res,db)=>{
    const {id}=req.params;

    db.select('*').from('users').
    where({id}).then(
       user=>{
           if(user.length){
           res.json(user[0]);
           }
           else{
               res.status(400).json('not found');
           }
       }
    ).catch(err=>res.status(400).json("getting error"));
       // if(!found){
       // res.status(404).json('no such user');
       // }

}
module.exports={
    handleProfile:handleProfile
}