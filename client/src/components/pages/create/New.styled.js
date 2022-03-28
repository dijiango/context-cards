import styled from "styled-components";

export const LinkMessage = styled.article`
    color: blue;
    margin: 25px 0px 0px 0px;
    font-family: Brush Script MT, cursive;
    text-decoration: underline;
    &:hover,
    &:focus {
        cursor: pointer;
    }
`

export const ErrorMessage = styled.article`
    margin: 25px 0px 0px 0px;
    font-family: Brush Script MT, cursive;
`