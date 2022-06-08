import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


function PersonalDetails({formData , setFormData}) {
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
          label="First name" value={formData.firstName} onChange={(event) => setFormData({...formData , firstName: event.target.value})}
        />
        <TextField required id="outlined-required" type="text"
          label="Last name"  value={formData.lastName} onChange={(event) => setFormData({...formData , lastName: event.target.value})}
        />
        <TextField required id="outlined-required" type="number"
          label="Age" value={formData.age} onChange={(event) => setFormData({...formData , age: event.target.value})}
        />
        <TextField required id="outlined-required" type="number"
          label="Mobile no" value={formData.mobileNo} onChange={(event) => setFormData({...formData , mobileNo: event.target.value})}
        />
        <TextField required id="outlined-required" type="email"
          label="Email" value={formData.email} onChange={(event) => setFormData({...formData , email: event.target.value})}
        />
    </div>
    </Box>
    </>
  )
}

export default PersonalDetails