import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import './signUpPage.css'
export default function SignUp() {
    const navigate = useNavigate()
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [passwordStrengthError,setPasswordStrengthError]=useState(false)
    const [usernameError,setUsernameError]=useState(false)
    const [emptyError,setEmptyError]=useState(false)
    const passwordErrorHandler = (flag) => {
        setPasswordMatchError(flag)
    }
    async function SignUpRequest(data) {

       let  unvalidatedData = {
            'username': data.get('username'),
            'password1': data.get('password1'),
            'password2': data.get('password2'),
            'name': data.get('name'),

        }
        let flag=0;
        Object.values(unvalidatedData).reduce((p,c)=>{
                if(c.length===0){
                    flag++
                }
                return 0
        })
        if(flag){
            
            setEmptyError(true)
            return -1
        }
        if(emptyError){
            setEmptyError(false)
        }
        if (unvalidatedData.password1 !== unvalidatedData.password2) {
            passwordErrorHandler(true)
            return -1;

        }
        if(passwordMatchError){
            passwordErrorHandler(false)
        }
        const passwordRegex= new RegExp('(?=.*[a-z])(?=.*[A-Z])')
        if(!passwordRegex.test(unvalidatedData.password1)|| ((unvalidatedData.password1).length)<6){
            setPasswordStrengthError(true)
            return -1
        }
        if(passwordStrengthError){
            setPasswordStrengthError(false)
        }
        let validatedData ={
            'username': data.get('username'),
            'password': data.get('password1'),
            'name': data.get('name'),

        }
        let res = await fetch('http://localhost:8000/api/register/',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(validatedData),
            })
        if (!res.ok) {
            console.log('invalid credentials')
            res= await res.json()
            if(res.username){
                setUsernameError(true)
            }
            return [false,1];
        }
        if(usernameError){
            setUsernameError(false)
        }
        res = await res.json()
        
        localStorage.removeItem('myToken')
        navigate(`/login`)
        return [res,0];
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let status = await SignUpRequest(data);
        console.log(`Status is ${status[0]}`);
    };
    return (
        <Container component="main" maxWidth="xs">

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                {emptyError && <span className='error'> All fields are mandatory </span>}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="Username"
                        autoFocus
                        className={(emptyError||usernameError)?"error-field":""}
                    />
                    {usernameError && <span className='error'> Username already exists,choose a different username</span>}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        className={emptyError?"error-field":""}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password1"
                        label="Password"
                        type="password"
                        id="password1"
                        autoComplete="current-password"
                        className={(passwordMatchError||emptyError)?"error-field":""}
                    />
                   {passwordMatchError && <span className='error'> Password does not match</span>}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password2"
                        label="Retype Password"
                        type="password"
                        id="password2"
                        autoComplete="retype-password"
                        className={(passwordMatchError||emptyError)?"error-field":""}
                    />
                    {passwordStrengthError && <span className='error'> Password Must contain one uppercase and lowercase character with length atleast 6</span>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 1 }}
                       
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Already Have an account. Sign In?"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>

    )
}

