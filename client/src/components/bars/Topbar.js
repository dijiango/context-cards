import { TopbarWrapper, TopbarText, LeftRoutes } from './Topbar.styled';
import { NavLink } from 'react-router-dom';
import logo from '../images/context.gif';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';

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

function Topbar() {
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
                        <NavLink to="/review" style={textStyle}>Review</NavLink>
                    </LeftRoutes>
                </div>
                <div className='topbar-right' style={textStyle}>
                    <IconButton>
                        <AccountCircleIcon style={iconStyle}/>
                    </IconButton>
                </div>
            </TopbarText>
        </TopbarWrapper>
    </div>

)}

export default Topbar;
