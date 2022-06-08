const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
   firstName :{
      type: String,
      required:true
   },
   lastName :{
      type: String,
      required:true
   },
   age :{
      type: Number,
      required:true
   },
   mobileNo :{
      type: Number,
      required:true
   },
   email :{
      type: String,
      required:true
   },
   businessName :{
      type: String,
      required:true
   },
   gstNo :{
      type: Number,
      required:true
   },
   officeAddress :{
      type: String,
      required:true
   },
   annualIncome :{
      type: Number,
      required:true
   },
   natureOfBusiness :{
      type: String,
      required:true
   },
   loanAmount :{
      type: Number,
      required:true
   },
   interestRate :{
      type: Number,
      required:true
   },
   loanTenture :{
      type: Number,
      required:true
   },
})

const User = new mongoose.model('LOANDATA',userSchema);

module.exports = User;


