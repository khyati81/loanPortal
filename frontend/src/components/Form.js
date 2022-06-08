import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';

import PersonalDetails from './PersonalDetails';
import BusinessDetails from './BusinessDetails';
import LoanAppDetails from './LoanAppDetails';

function Form() {

    const [tabs, setTabs] = React.useState('1');
    const [formData , setFormData] =  React.useState({
        firstName:"",
        lastName:"",
        age:"",
        mobileNo:"",
        email:"",
        businessName:"",
        gstNo:"",
        officeAddress:"",
        annualIncome:"",
        natureOfBusiness:"",
        loanAmount:"",
        interestRate:"",
        loanTenture:"",

    })



    const handleChange = (event, newTabs) => {
      setTabs(newTabs);
    }

    const TabsDisplay = () => {
        if (tabs === '1') {
          return <PersonalDetails formData={formData} setFormData={setFormData} />
        } else if (tabs === '2') {
          return <BusinessDetails  formData={formData} setFormData={setFormData}/>;
        } else {
          return <LoanAppDetails  formData={formData} setFormData={setFormData} />;
        }
      };
    

      const PostData = async (e) => {
          if (e && e.preventDefault) { e.preventDefault(); }

          const{ firstName, lastName, age, mobileNo, email, businessName, gstNo, officeAddress, annualIncome, natureOfBusiness, loanAmount, interestRate, loanTenture,
            } = formData;

           const res = await fetch("/ ", {
               method:"POST",
               headers:{
                   "Content-Type" : "application/json"
               },
               body:JSON.stringify({
                    firstName, lastName, age, mobileNo, email, businessName, gstNo, officeAddress, annualIncome, natureOfBusiness, loanAmount, interestRate, loanTenture,
               })
           });

           const data = await res.json(); 

           if(data.status ===  422 || !data){
               window.alert("Invalid");
               console.log("invalid");
           }else{
               window.alert("Registered")
               console.log("Registered")
               window.location.href = window.location.href;
           }
      }

      
    
  return (
    <div>
        
        <div className="form__container">
            <div className="form__body">
                <div className="form__tabs">
                    <Box sx={{ typography: 'body1' , bgcolor: 'background.paper' }} >
                        <TabContext value={tabs}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider',bgcolor: '#DCECF6' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example" centered sx={{p:2}}>
                                    <Tab label="Personal Details" value="1" />
                                    <Tab label="Business details" value="2" />
                                    <Tab label="Loan Application details" value="3" />
                                </TabList>
                            </Box>
                            <Box sx={{ p:6 }}>
                                <TabPanel value="1">{TabsDisplay()} </TabPanel>
                                <TabPanel value="2">{TabsDisplay()} </TabPanel>
                                <TabPanel value="3">{TabsDisplay()}</TabPanel>

                                <div className='btnStyle'>
                                <Button variant="outlined" color="primary" disabled = {tabs == 1}
                                    onClick={() =>{
                                        setTabs((currTab) => (parseInt(currTab) - 1).toString())
                                }}>Previous</Button>
                                <Button variant="outlined" color="primary" 
                                    onClick={() =>{
                                        if(tabs === '3'){
                                            console.log(formData)
                                            PostData()
                                        }else{
                                            setTabs((currTab) => (parseInt(currTab) + 1).toString())
                                        }
                                }}>{tabs=== '3' ? "Submit":"Next"}</Button>
                                </div>
                            </Box>
                        </TabContext>
                    </Box>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Form