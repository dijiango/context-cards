import styled from 'styled-components';

export const DivStyle = styled.div `
    padding: 10px;
    display: flex;
    overflow-x: hidden;
    /* border: 5px solid black; */
`
export const DeckGrid = styled.span `
    width: auto;
    height: auto;
    padding: 10px;
    flex: 1;
    justify-content: center;
    align-items: center;
    /* border: 5px solid blue; */
`

export const DeckSummary = styled.span `
    /* width: auto;
    height: auto; */
    padding: 10px;
    flex: 1;
    justify-content: center;
    align-items: center;
    
    /* border: 5px solid blue; */
`
export const SummaryGroup = styled.span`
    list-style-type: none;
    display: block;
    /* justify-content: center|space-between; */
    align-items: center; 
    padding-top: 15%;
    color: #483970;
    font-size: 40px;
    font-weight: bold;
    /* border: 5px solid red; */
`
export const SummaryItem = styled.span`
    /* justify-content: center|space-between; */
    align-items: center;
    font-size: 25px;
    font-weight: none;
    color: #595959;
    font-style: italic;
    /* border: 5px solid purple; */
`
