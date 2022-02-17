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

  function changePublicView(id) {
    props.changePublicView(id);
  }

//   function changePublicTrue() {
//       fetch(`/decks/${props.deckID}`, {
//       method: "PATCH",
//       headers:  {
//           "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//           public: 'true'
//       }),
//     })
//       .then(r => r.json())
//   }

//   function changePublicFalse() {
//     fetch(`/decks/${props.deckID}`, {
//     method: "PATCH",
//     headers:  {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         public: 'false'
//     }),
//     })
//     .then(r => r.json())
// }

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
              <Grid item xl={12}><SummaryText>{props.deckSummary}</SummaryText></Grid>
              <Grid item sm={4}>
                <IconButton onClick={() => handleDelete()}> <DeleteIcon  color='disabled' fontSize='large'/></IconButton>               
                <MenuText>Delete</MenuText>
              </Grid>
              <Grid item sm={4}>
              <IconButton onClick={()=> changePublicView(props.deckID)}>
                  {props.isPublic ? <VisibilityIcon  color='disabled' fontSize='large'/> :  <VisibilityOffIcon color='disabled' fontSize='large'/>}            
              </IconButton>
                <MenuText>Public</MenuText>
              </Grid>
              <Grid item sm={4}>
              <IconButton><QuizIcon color='disabled' fontSize='large'/></IconButton>                
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