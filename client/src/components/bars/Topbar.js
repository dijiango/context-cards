import { TopbarWrapper, TopbarText, LeftRoutes } from './Topbar.styled';
import { NavLink } from 'react-router-dom';
import logo from '../images/context.gif';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, IconButton } from '@mui/material';


const imgStyle = {
    height: "100px",
    marginLeft: "-25px"
}

const textStyle = {
    color: "white",
    fontFamily: "Brush Script MT, cursive",
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none",
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
    fontSize: "15px"
}

function Topbar({ user, setUser }) {

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
                        <NavLink to="/home" style={textStyle}>Home</NavLink>
                    </LeftRoutes>
                    <LeftRoutes>
                        <NavLink to="/create" style={textStyle}>Create</NavLink>
                    </LeftRoutes>
                    <LeftRoutes>
                        <NavLink to="/discover" style={textStyle}>Discover</NavLink>
                    </LeftRoutes>
                </div>
                <div className='topbar-right' style={textStyle}>
                    <Button variant='outlined' color='inherit' style={buttonStyle} onClick={handleLogout}>
                        Log Out
                    </Button>
                    <IconButton>
                        <AccountCircleIcon style={iconStyle}>
                            {/* <NavLink to="/"/> */}
                        </AccountCircleIcon>
                    </IconButton>
                </div>
            </TopbarText>
        </TopbarWrapper>
    </div>

)}

export default Topbar;
