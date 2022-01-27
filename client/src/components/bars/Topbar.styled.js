import styled from 'styled-components';

export const TopbarWrapper = styled.div `
    width: 100%;
    height: auto;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,32,125,1) 35%, rgba(112,58,162,1) 69%);
`

export const TopbarText = styled.span `
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const LeftRoutes = styled.span `
    padding: 0px 20px;
    align-items: center;
    text-align: center;
    height: 100%;
    vertical-align: middle;
`
