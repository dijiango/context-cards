import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, Paper } from '@mui/material';
import { DivStyle, MenuBox, PopupBox, TitleBar } from './Deck.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import PageviewIcon from '@mui/icons-material/Pageview';
import QuizIcon from '@mui/icons-material/Quiz';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const menuHeaderStyle = {
  backgroundColor: '#392d59'
}

const menuBodyStyle = {

}

const rightBarStyle = {
  textAlign:'right'
}

const leftBarStyle = {
}

const iconStyle = {
  color: '#e2d5f2',
  fontSize: '30px'
}

function DeckMenu( props ) {
  return (
    <PopupBox>
      <MenuBox>
        <Paper elevation={1}>
          <DivStyle style={menuHeaderStyle}>
            <TitleBar style={leftBarStyle}></TitleBar>
            <TitleBar style={rightBarStyle}>
              <IconButton onClick={props.handleClose}><ClearIcon sx={iconStyle} /></IconButton>
            </TitleBar>
          </DivStyle>
          <DivStyle style={menuBodyStyle}>
            <PageviewIcon color='disabled'/>
            <QuizIcon color='disabled'/>
            <VisibilityIcon color='disabled'/>
            <DeleteIcon color='disabled'/>
          </DivStyle>
        </Paper>
      </MenuBox>
    </PopupBox>
  )
}

export default DeckMenu