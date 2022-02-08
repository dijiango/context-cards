import { Paper, Stack, Box, IconButton, Button } from '@mui/material';
import React from 'react';
import { DivStyle } from './DepDeck.styled';
import { LeftBar, TitleBar, PTag, List, Detail } from './Deck.styled';
import DeckIcon from '../components/images/deckicon.png';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import SchoolIcon from '@mui/icons-material/School';
import AppsIcon from '@mui/icons-material/Apps';

const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '3rem',
    height: '3rem'
  }

function Deck( props ) {
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
                                        {/* <IconButton sx={{ ...commonStyles, borderRadius: '50%' }}>
                                            <AutoAwesomeMotionIcon />
                                        </IconButton>
                                        <IconButton sx={{ ...commonStyles, borderRadius: '50%' }}>
                                            <SchoolIcon />
                                        </IconButton> */}
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
                                        <Button variant='contained' sx={{margin:'auto', padding:'10px', backgroundColor:'#4b3c73', '&:hover': {backgroundColor:'#5c33cc'}}}>Review Deck</Button>
                                        <IconButton variant="contained" disableRipple={true} sx={{'&:hover': {transform:'scale(1.20)'} }}>
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
