import { Paper } from '@mui/material';
import React from 'react';
import { CreateMenu, CreateOption, OptionHeader, WrapperDiv } from './Create.styled';

function Create() {
  return (
    <div>
        <WrapperDiv>
          <CreateMenu>
            <CreateOption>
              <OptionHeader style={{backgroundColor:'lightblue'}}>
                <Paper>
                  Create New Deck
                </Paper>
              </OptionHeader>
              <OptionHeader style={{backgroundColor:'lightpink'}}>
              <Paper>
                  Add to Existing Deck
                </Paper>
              </OptionHeader>
            </CreateOption>
          </CreateMenu>
        </WrapperDiv>
    </div>
)};

export default Create;
