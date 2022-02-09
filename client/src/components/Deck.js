import { Paper, Stack, Box, IconButton, Button } from '@mui/material';
import React, { useState } from 'react';
import { DivStyle } from './DepDeck.styled';
import { LeftBar, TitleBar, PTag, List, Detail } from './Deck.styled';
import DeckIcon from '../components/images/deckicon.png';
import AppsIcon from '@mui/icons-material/Apps';
import { useNavigate } from 'react-router-dom';



function Deck( props ) {
    const[deckID, setDeckID] = useState();
    const navigate = useNavigate();

    function handleClick(id) {
       props.setDeckID(id);
    }

    function handleDelete(deck) {
        props.deckToDelete(deck);
    }

    

  return (
    <div>
        <Stack spacing={2} alignItems='center'>
            <LeftBar>
                <DivStyle>
                    <Paper elevation={2} sx={{padding:"20px"}}>
                        <DivStyle>
                            <img src={DeckIcon} alt='Deck Icon' height={50} />
                            <h1 style={{margin:'auto 25px'}}>{props.deck.subject}</h1>
                        </DivStyle>
                            <PTag>
                                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                    <span >
                                        <List>
                                            <Detail>#</Detail>
                                            <li>total cards</li>
                                        </List>
                                    </span>
                                    <span >
                                        <List>
                                            <Detail>#</Detail>
                                            <li>need review</li>
                                        </List>
                                    </span>
                                    <DivStyle style={{marginLeft:'100px'}}>

                                        <Button onClick={() => {handleClick(props.deck.id); navigate(`/decks/${props.deck.id}`)}} variant='contained' sx={{margin:'auto', padding:'10px', backgroundColor:'#4b3c73', '&:hover': {backgroundColor:'#5c33cc'}}}>Review Deck</Button>
                                        
                                        <IconButton onClick={() => {handleDelete(props.deck.id)}} variant="contained" disableRipple={true} sx={{'&:hover': {transform:'scale(1.20)'} }}>
                                            <AppsIcon />
                                        </IconButton>
                                    </DivStyle>
                                </Box> 
                            </PTag>
                        <DivStyle>
                        </DivStyle>
                    </Paper>
                </DivStyle>
            </LeftBar>
        </Stack>
    </div>
)}

export default Deck;
