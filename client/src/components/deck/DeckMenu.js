import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Grid, IconButton, Paper } from '@mui/material';
import { DivStyle,MenuHeader,MenuText,SummaryText,TitleBar } from './Deck.styled';
import { MenuBox, PopupBox } from '../Popup.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import PageviewIcon from '@mui/icons-material/Pageview';
import QuizIcon from '@mui/icons-material/Quiz';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const menuHeaderStyle = {
  backgroundColor: '#392d59'
}

const menuBodyStyle = {
  textAlign: 'center',
  margin: '20px'
}

const rightBarStyle = {
  textAlign: 'right'
}

const leftBarStyle = {

}

const iconStyle = {
  color: '#e2d5f2',
  fontSize: '30px'
}


function DeckMenu( props ) {

  function handleDelete() {
    fetch(`/decks/${props.deckID}`, {
      method: "DELETE"
    })
    .then(() => {
      props.getDecks();
    })
  }

  return (
    <PopupBox>
      <MenuBox>
        <Paper elevation={1}>
          <DivStyle style={menuHeaderStyle}>
            <TitleBar style={leftBarStyle}><MenuHeader>What's next?</MenuHeader></TitleBar>
            <TitleBar style={rightBarStyle}>
              <IconButton onClick={props.handleClose}><ClearIcon sx={iconStyle} /></IconButton>
            </TitleBar>
          </DivStyle>
          <DivStyle style={menuBodyStyle}>
            <Grid container spacing={3}>
              <Grid item xl={12}><MenuText>Deck Summary:</MenuText></Grid>
              <Grid item xl={12}><SummaryText>"{props.deckSummary}"</SummaryText></Grid>
              <Grid item sm={4}>
                <DeleteIcon onClick={() => handleDelete()} color='disabled' fontSize='large'/>
                <MenuText>Delete</MenuText>
              </Grid>
              <Grid item sm={4}>
                <VisibilityIcon color='disabled' fontSize='large'/>
                <MenuText>Public</MenuText>
              </Grid>
              <Grid item sm={4}>
                <QuizIcon color='disabled' fontSize='large'/>
                <MenuText>Quiz Mode</MenuText>
              </Grid>
              
            </Grid>
            
            
            
            
          </DivStyle>
        </Paper>
      </MenuBox>
    </PopupBox>
  )
}

export default DeckMenu