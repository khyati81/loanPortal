const express = require('express');
const router = express.Router();


require('../db/conn');
const User = require("../model/userSchema");

router.get('/' , (req,res) => {
    res.send('router');
});

router.post('/' , async (req,res) => {
    const{ firstName, lastName, age, mobileNo, email, businessName, gstNo, officeAddress, annualIncome, natureOfBusiness, loanAmount, interestRate, loanTenture,
    } = req.body;   


    try{
        
        const user = new User({ firstName, lastName, age, mobileNo, email, businessName, gstNo, officeAddress, annualIncome, natureOfBusiness, loanAmount, interestRate, loanTenture,
        });

        const userData = await user.save();

        if(userData){
            res.status(201).json({ message: "User registered successfully"});
        }
    }catch(err) {
        console.log(err);
    }

    
});


module.exports = router;