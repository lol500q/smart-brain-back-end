const clarifai=require('clarifai');
const app = new Clarifai.App({
    apiKey: '09e317dd8aa640569cc7d66503494662'
   });
   const handleAPICall=(req,res)=>{app.models
   .predict(
     Clarifai.FACE_DETECT_MODEL,
     req.body.input).then(data=>res.json(data))
     .catch(err=>res.status(400).json('unable to work with api'));
   }
handleImage=(req,res,db)=>{
    const {id}=req.body;
    db('users').where('id','=',id).increment(
        'entries',1).returning('entries').then(entries=>{
            res.json(entries[0].entries)
        }).catch(err=>response.status(400).json('un able to get entries'))

}
module.exports={
    handleImage:handleImage,
    handleAPICall:handleAPICall
}