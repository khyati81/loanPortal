import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function LoanAppDetails({formData , setFormData}) {
  return (
  <>
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 2, width: '70ch' },
    }}
    Validate
    autoComplete="off"
  >
    <div className='subForm__container'>
    <TextField required id="outlined-required" type="number"
      label="Loan Amount" value={formData.loanAmount} onChange={(event) => setFormData({...formData , loanAmount: event.target.value})}
    />
    <TextField required id="outlined-required" type="number"
      label="Interest Rate" value={formData.interestRate} onChange={(event) => setFormData({...formData , interestRate: event.target.value})}
    />
    <TextField required id="outlined-required" type="number"
      label="Loan tenture" value={formData.loanTenture} onChange={(event) => setFormData({...formData , loanTenture: event.target.value})}
    />
    
    </div>
    </Box>
</>
  )
}

export default LoanAppDetails