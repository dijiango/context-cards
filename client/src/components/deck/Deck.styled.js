import styled from "styled-components";

export const DivStyle = styled.div`
    padding: 10px;
    display: flex;
    overflow-x: hidden;
`
export const TitleBar = styled.div`
    width: 50%;
    /* background-color: #FDE8C9; */
`
export const LeftBar = styled.div`
    float: left;
`

export const PTag = styled.h3`
    margin-Top: -25px;
    margin-Left: 50px;
    font-style: italic;
    font-weight: normal;
`
export const List = styled.ul`
    list-style-type: none;
    text-align: center;
`

export const Detail = styled.h1`
    font-family: Garamond;
    font-style: normal;
    color: silver;
    font-size: 30px;
`

//DeckMenu Styling
export const PopupBox = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.50);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`
export const MenuBox = styled.div`
    position: fixed;
    height: auto;
    width: 50%;
`
