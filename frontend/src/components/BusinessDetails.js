import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function BusinessDetails({formData , setFormData}) {
  return (
    <>
      <Box
    component="form"
    sx={{
      '& .MuiTextField-root': {m: 2, width: '70ch'},
    }}
    Validate
    autoComplete="off"
  >
        <div className='subForm__container'>
        <TextField required id="outlined-required" type="text"
          label="Business name" value={formData.businessName} onChange={(event) => setFormData({...formData , businessName: event.target.value})}
        />
        <TextField required id="outlined-required" type="number"
          label="GST no"  value={formData.gstNo} onChange={(event) => setFormData({...formData , gstNo: event.target.value})}
        />
        <TextField required id="outlined-required" type="text"
          label="Office Address"  value={formData.officeAddress} onChange={(event) => setFormData({...formData , officeAddress: event.target.value})}
        />
        <TextField required id="outlined-required" type="number"
          label="Annual income" value={formData.annualIncome} onChange={(event) => setFormData({...formData , annualIncome: event.target.value})}
        />
        <TextField required id="outlined-required" type="text"
          label="Nature of Business" value={formData.natureOfBusiness} onChange={(event) => setFormData({...formData , natureOfBusiness: event.target.value})}
        />
        </div>
        </Box>
    </>
  )
}

export default BusinessDetails