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
    <div>
    </div>
)};

export default Discover;