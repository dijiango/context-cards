import React, { useState } from 'react';
import { Form, Title } from './Auth.styled';
import { Container, Box, Paper, Stack, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const buttonStyle = {
    float: 'right',
    margin: '20px 0px 10px'
}

const boxStyle = {
    margin: 4,
    paddingTop: 2,
    paddingBottom: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

function Signup({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    function handleSubmit(e){
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({username, email, password}),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
        console.log("This is the user data", username, password, email);
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    };
    
  return (
    <div>
        <Container component='main' maxWidth='sm'>
            <Paper elevation={3}>
                <Box sx={ boxStyle }>
                <Title>Sign Up</Title> 
                <Form onSubmit={handleSubmit}>
                    <Stack spacing={5}>
                        <TextField
                            label="Username"
                            variant='standard'
                            color='secondary'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <TextField
                            label="Email Address"
                            variant='standard'
                            color='secondary'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <TextField
                            label="Password"
                            variant='standard'
                            color='secondary'
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                )
                            }}
                        />
                    </Stack>
                    <Button variant='outlined' size='large' color='secondary' type='submit' sx={buttonStyle} >Submit</Button>
                    {errors.map((err) => (
                        <div>
                            <p>{err}</p>
                        </div>
                    ))}
                </Form>
                </Box>
            </Paper>
        </Container>
    </div>
    )
}

export default Signup;

