import { Paper, Stack, Box, IconButton, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { LeftBar, DivStyle, PTag, List, Detail, UsernameStyle } from './Deck.styled';
import DeckIcon from '../images/cardDeck.png';
import AppsIcon from '@mui/icons-material/Apps';
import { useNavigate } from 'react-router-dom';
import DeckMenu from './DeckMenu';

const deckTitleStyle = {
    fontFamily: 'Brush Script MT, cursive',
    margin:'30px 25px 10px'
}

const buttonStyle ={
    margin:'auto',  
    padding:'10px',
    fontFamily: 'Brush Script MT, cursive',
    backgroundColor:'#4b3c73',
    '&:hover': {
        backgroundColor:'#5c33cc'}    
}

function Deck( props ) {
    const [deckID, setDeckID] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [flashcards, setFlashcards] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`/decks/${props.deck.id}`)
        .then((r) => {
        if (r.ok) {
            r.json().then((deck) => {
                setFlashcards(deck.flashcards);
            });
        }
        });
    }, []);


    function toggleMenu(id) {
        setDeckID(id);
        setIsOpen(!isOpen);
    }

  return (
    <div>
        {
        isOpen && <DeckMenu
            handleClose={toggleMenu}
            deckID={deckID}
            getDecks={props.getDecks}
            deckSummary={props.deck.summary}
        />
        }
        <Stack spacing={2} alignItems='center'>  
            <LeftBar>
                <DivStyle>
                    <Paper elevation={2} sx={{padding:"20px", minWidth:'650px', maxWidth:'650px'}}>
                        <div style={{display:'flex', padding:'10px', position:'relative'}}>
                            <img src={DeckIcon} alt='Deck Icon' height={70} />
                            <h1 style={deckTitleStyle}>{props.deck.subject}</h1>
                            {props.hideFromView ? <UsernameStyle>Created by: "{props.deck.username}"</UsernameStyle> : null}
                        </div>
                            <PTag>
                                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                    <span >
                                        <List>
                                            <Detail>{flashcards.length}</Detail>
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
                                        <Button onClick={() => {navigate(`/deck/${props.deck.id}`);}} variant='contained' sx={buttonStyle} >Review Deck</Button>
                                        {
                                            props.hideFromView ? <span /> : <IconButton onClick={() => {toggleMenu(props.deck.id); }} variant="contained" disableRipple={true} sx={{'&:hover': {transform:'scale(1.20)'} }}><AppsIcon /></IconButton>
                                        } 
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
