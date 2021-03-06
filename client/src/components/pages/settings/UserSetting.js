import React, { useState } from 'react';
import { Button, Paper, Stack, TextField } from '@mui/material'

const buttonStyle = {
    margin: 'auto 50% 50px'
}

const imageStyle = {
    height: '500px',
    margin: 'auto 50% 50px'
}

function UserSetting( props ) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [image, setImage] = useState();
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/me`, {
            method: "PATCH",
            headers:  {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username, password, email, image
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json()
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        })
      }

  return (
    <div>
        UserSetting
        <img src={props.user.image} alt='Profile Picture' style={imageStyle}/>
        <Paper sx={{margin: '50px'}}>
        <form onSubmit={handleSubmit}>
        <Stack spacing={5} sx={{padding:'50px 75px'}}>
        <TextField
            label="Username"
            variant='standard'
            color='secondary'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
        />
        <TextField
            label="Password"
            variant='standard'
            color='secondary'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
        <TextField
            label="Email"
            placeholder="Give this deck a little context..."
            variant='standard'
            color='secondary'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
        />
        </Stack>
        <Button variant='outlined' size='large' color='secondary' type='submit' sx={buttonStyle}>Submit</Button>
    </form>
    </Paper>
    </div>
  )
}

export default UserSetting