const express=require('express');
const bcrypt=require('bcrypt-nodejs');
const cors=require('cors');
const knex = require('knex');
const { response } = require('express');
const register = require('./controllers/register');
const signin=require('./controllers/signin');
const profile=require('./controllers/profile');
const image=require('./controllers/image');
const { handleSignin } = require('./controllers/signin');
const db=knex({
    client: 'pg',
    connection: {
      host : 'postgresql-metric-50934',
      port : 5432,
      user : 'postgres',
      password : 'brain123@',
      database : 'smart-brain'
    }
  });
// db.select('*').from('users').then(data=>{
//     console.log(data);
// }); 
const app=express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('sucess');
});
app.post('/signin',(req,res)=>signin.handleSignin(req,res,db,bcrypt));
app.post('/register',(req,res)=>register.handleRegister(req,res,db,bcrypt));
app.get('/profile/:id',(req,res)=>profile.handleProfile(req,res,db));
app.put('/image',(req,res)=>image.handleImage(req,res,db));
app.post('/imageurl',(req,res)=>image.handleAPICall(req,res));
bcrypt.hash("bacon", null, null, function(err, hash) {
    // Store hash in your password DB.
});
app.listen(process.env.PORT||3000,(()=>{
    console.log(`app is running on port ${process.env.PORT}`);
}));

