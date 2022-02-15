import styled from "styled-components";

export const CardContainer = styled.div`
    /* background-color: lightgray; */
    justify-content: center;
    align-items: center;
    margin: 100px 100px;
    display: flex;
`

export const Term = styled.h1`
    font-size: 50px;
    color: #4b3c73;
`

export const Meaning = styled.h3`
    font-size: 25px;
    /* color: #4b3c73; */
`
export const Hint = styled.span`
    font-size: 20px;
    font-style: italic;
    color: #5c33cc;
    position: absolute;
    bottom: 0;
    margin-bottom: 25px;
`

export const CarouselWrapper = styled.div`
    /* background-color: lightgray; */
    overflow-x: scroll;
    text-align: center;
    margin: -50px 50px 50px;
    padding: 25px 10px;
    ::-webkit-scrollbar {
        width: 20px;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(75, 60, 115, 0.6);
        border-radius: 20px;
        border: 6px solid transparent;
        background-clip: content-box;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(75, 60, 115, 0.8);
    }
`



