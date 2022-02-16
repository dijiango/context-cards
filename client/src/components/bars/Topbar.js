import { useState } from 'react';
import { TopbarWrapper, TopbarText, LeftRoutes } from './Topbar.styled';
import { NavLink } from 'react-router-dom';
import logo from '../images/context.gif';
import { Button, IconButton, Paper } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';


const imgStyle = {
    height: "100px",
    marginLeft: "-25px"
}

const textStyle = {
    color: "white",
    fontFamily: "Brush Script MT, cursive",
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none"
}

const rightBar = {
    display: "flex",
    justifyContent: "center", 
    alignText: "center"
}

const iconStyle = {
    color: "white",
    fontSize: "50"
}

const buttonStyle = {
    color: "#e2d5f2",
    margin: "0px 20px 0px",
    fontFamily: "Brush Script MT, cursive",
    fontWeight: "bold",
    fontSize: "15px",
    margin: "10px 20px"
}

const picStyle = {
    height: "50px",
    width: "50px",
    borderRadius: "50%"
}


function Topbar({ user, setUser }) {
    const [isUserOpen, setisUserOpen] = useState(false);

    const handleLogout = () => {
        fetch("/logout", { method: "DELETE" })
        .then((r) => {
            if (r.ok) {
                setUser(null)
            }
        })
    }

  return (
    <div className='topbar'>
        <TopbarWrapper>
            <TopbarText>
                <div className='topbar-left'>
                    <LeftRoutes>
                        <NavLink to="/">
                            <img 
                            src={logo} 
                            alt='Context' 
                            style={imgStyle}/>
                        </NavLink>
                    </LeftRoutes>
                    <LeftRoutes>
                        <NavLink to="/" style={textStyle}>Home</NavLink>
                    </LeftRoutes>
                    <LeftRoutes>
                        <NavLink to="/create" style={textStyle}>Add</NavLink>
                    </LeftRoutes>
                    <LeftRoutes>
                        <NavLink to="/update" style={textStyle}>Discover</NavLink>
                    </LeftRoutes>
                </div>
                <div className='topbar-right' style={rightBar}>
                    <Button variant='outlined' color='inherit' style={buttonStyle} onClick={handleLogout}>
                        Log Out
                    </Button>
                    <IconButton href='/user/settings'>
                        {user.image ?  <img src={user.image} alt='User Pic' style={picStyle}/> : <AccountCircleIcon style={iconStyle} />}
                            {/* <NavLink to="/"/> */}
                    </IconButton>
                </div>
            </TopbarText>
        </TopbarWrapper>
        
    </div>

)}

export default Topbar;
