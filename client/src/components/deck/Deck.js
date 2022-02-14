import { Paper, Stack, Box, IconButton, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { LeftBar, DivStyle, PTag, List, Detail } from './Deck.styled';
import DeckIcon from '../images/deckicon.png';
import AppsIcon from '@mui/icons-material/Apps';
import { useNavigate } from 'react-router-dom';
import DeckMenu from './DeckMenu';

const deckTitleStyle = {
    fontFamily: 'Brush Script MT, cursive',
    margin:'auto 25px'
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
    const[deckID, setDeckID] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [flashcards, setFlashcards] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`/decks/${props.deck.id}`)
        .then((r) => {
        if (r.ok) {
            r.json().then((cards) => {
            setFlashcards(cards.flashcards);
            });
        }
        });
    }, []);

    
    function handleClick(id) {
        props.handleDeckId(id);
        // console.log("Deck id", id);
    }
    console.log("Flashcard array", flashcards);

    function handleDelete(deck) {
        if (deck) {
            fetch(`/decks/${deck}`, {
            method: "DELETE"
            })
            .then((r) => r.json())
            }
    }
        

    function handleDelete(deck) {
        props.deckToDelete(deck);
    }

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    

  return (
    <div>
        {
        isOpen && <DeckMenu
            handleClose={toggleMenu}
            handleDelete={handleDelete}
            currentDeck={props.deck.id}
        />
        }
        <Stack spacing={2} alignItems='center'>
            <LeftBar>
                <DivStyle>
                    <Paper elevation={2} sx={{padding:"20px"}}>
                        <DivStyle>
                            <img src={DeckIcon} alt='Deck Icon' height={50} />
                            <h1 style={deckTitleStyle}>{props.deck.subject}</h1>
                        </DivStyle>
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

                                        <Button onClick={() => {handleClick(props.deck.id); navigate('/viewdeck');}} variant='contained' sx={buttonStyle} >Review Deck</Button>
                                        <IconButton onClick={() => {toggleMenu(); }} variant="contained" disableRipple={true} sx={{'&:hover': {transform:'scale(1.20)'} }}>
                                        {/* Handle delete icon */}
                                        {/* <IconButton onClick={() => {handleDelete(props.deck.id)}} variant="contained" disableRipple={true} sx={{'&:hover': {transform:'scale(1.20)'} }}></IconButton> */}
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
