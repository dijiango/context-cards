import { Paper, Stack, Box, IconButton, Button } from '@mui/material';
import React, { useState } from 'react';
import { LeftBar, DivStyle, PTag, List, Detail } from './Deck.styled';
import DeckIcon from '../images/deckicon.png';
import AppsIcon from '@mui/icons-material/Apps';
import { useNavigate } from 'react-router-dom';
import DeckMenu from './DeckMenu';



function Deck( props ) {
    const[deckID, setDeckID] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    function handleClick(id) {
       props.setDeckID(id);
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
        />
        }
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

                                        <Button onClick={() => {handleClick(props.deck.id); navigate(`/viewdeck`)}} variant='contained' sx={{margin:'auto', padding:'10px', backgroundColor:'#4b3c73', '&:hover': {backgroundColor:'#5c33cc'}}}>Review Deck</Button>
                                        <IconButton onClick={toggleMenu} variant="contained" disableRipple={true} sx={{'&:hover': {transform:'scale(1.20)'} }}>
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
