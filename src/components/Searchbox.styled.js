import styled from "styled-components";

export const StyledForm = styled.form`
    display:flex;
    align-items: center;
    margin-top: 40px;
`

export const StyledInput = styled.input`
    padding: 8px;
    font-size: 16px;
    border-radius:0px;
    border: 2px solid #ababab;
    &:hover, &:focus {
        border-color: #a6cdff;
    }
`

export const StyledButton = styled.button`
    padding: 8px 10px;
    font-size: 16px;
    background-color:transparent;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    border: none;
    background-color: #ababab;
    &:hover, &:focus {
        background-color: #a6cdff;
    }
`