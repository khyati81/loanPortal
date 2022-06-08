const dotenv = require('dotenv');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

dotenv.config({path:'./config.env'});
require('./db/conn');
const User = require('./model/userSchema');

app.use(require('./router/submit'));

const PORT = process.env.PORT;
 
// const middleware = (req,res,next) => {
//     console.log("middle");
//     next(); 
// }

app.listen(PORT, () =>{
    console.log("server running at " + PORT);
})















