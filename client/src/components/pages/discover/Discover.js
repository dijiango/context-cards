import { TextField, Stack, Button, Paper } from '@mui/material';
import React, { useState } from 'react';


const buttonStyle = {
  float: 'right',
  margin: '20px 0px 10px'
}

function Discover() {
  const [deckId, setDeckId] = useState();
  const [subject, setSubject] = useState();
  const [summary, setSummary] = useState();
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/decks/${deckId}`, {
        method: "PATCH",
        headers:  {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            subject, summary
        }),
    })
    .then(r => {
        if (r.ok) {
            r.json().then(setDeckId(''), setSubject(''), setSummary(''))
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
    })
  }

  return (
    <>
      <Paper>
        <form onSubmit={handleSubmit}>
        <Stack spacing={5}>
        <TextField
            label="Deck Id"
            variant='standard'
            color='secondary'
            onChange={(e) => setDeckId(e.target.value)}
            value={deckId}
        />
        <TextField
            label="Subject"
            variant='standard'
            color='secondary'
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
        />
        <TextField
            label="Summary"
            placeholder="Give this deck a little context..."
            variant='outlined'
            color='secondary'
            multiline
            rows={4}
            onChange={(e) => setSummary(e.target.value)}
            value={summary}
        />
        </Stack>
        <Button variant='outlined' size='large' color='secondary' type='submit' sx={buttonStyle}>Submit</Button>
    </form>
    </Paper>
    </>
)};

export default Discover;