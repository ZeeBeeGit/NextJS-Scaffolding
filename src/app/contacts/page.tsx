"use client"

import { Button, Paper, TextField, Typography, autocompleteClasses } from '@mui/material';
import Image from 'next/image'
import { Input } from '@mui/material';
import { FormEventHandler, useState } from 'react';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { Autour_One } from 'next/font/google';

export default function Contacts() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [nameError, setNameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [formError, setFormError] = useState("")
    const handleSubmit = (event: any ) => {
        event.preventDefault()
        setFormError('e!')
        setNameError(false)
        setPasswordError(false)
       
 
        
        if (name == '') {
            setNameError(true)
            setFormError("Please fix Email error");
        }
        if (password == '') {
            setPasswordError(true)
            setFormError("Please fix Password")
        }
 
        if (name && password) {
            console.log(name, password);
           
            
        }
        if( nameError||passwordError) {
            
            console.log(`Form Error= $formError`)
        }
        submitForm(event);
    }

 async function  submitForm(event:any)  {

   // alert(event.target.form.first.value);
    // Get data from the form.
    const data = {
        first: event.target.form.first.value,
        last: event.target.form.first.last,
      }
   
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
   
      // API endpoint where we send form data.
      const endpoint = '/api/test_formhandler'
   
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
   
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
   
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      alert(`Is this your full name: ${result}`)
      setFormError( result.Name );

}

  return (
    
    <div className={'bg-white  justify-center items-center place-content-center'}>
        <div style= { {border: '2px solid red',} } className={'bg-white w-screen' } >
            <Typography variant="h4" >Contacts</Typography>
            <Typography>{formError}</Typography>
       </div>
       <form autoComplete="off" method="post" action="/api/handle" onSubmit={handleSubmit}>
        <div style= { {border: '2px solid black '} } className={'p-10 mx-[25%] bg-white w-1/2 shrink relative justify-center items-center'}>
            <h2>Login Form</h2>
                <TextField 
                    label="Name"
                    id="first" name="first"
                    onChange={e => setName(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={name}
                    error={nameError}
                 />
                 <TextField 
                    label="Password"
                    id="last" name="last"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <div className={'flex m-auto w-1/2 justify-center'} style={ {border: '2px solid red '} } >
                 <Button sx={{margin:"margin 0 auto"}} variant="outlined" color="secondary" type="button" onClick={e=>handleSubmit(e)}>Login</Button>
                 </div>
           </div>     
        </form>
        
        </div>
     
        
       
  );
}
