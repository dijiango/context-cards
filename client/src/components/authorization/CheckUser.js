import { Button } from '@mui/material';
import { useState } from 'react';
import { Caption } from './Auth.styled';
import Login from './Login';
import Signup from './Signup';



function CheckUser({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div>
            {showLogin ? (
                <div>
                    <Login onLogin={onLogin}/>
                    <Caption>
                        Don't have an account?
                        <Button variant='text' onClick={() => setShowLogin(false)}>Sign Up</Button>
                    </Caption>
                </div>
            ) : (
                <div>
                    <Signup onLogin={onLogin}/>
                    <Caption>Already have an account?
                        <Button variant='text' onClick={() => setShowLogin(true)}>Login</Button>
                    </Caption>
                </div>
            )}
        </div>
    )
}

export default CheckUser;