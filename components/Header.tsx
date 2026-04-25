import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #5555ff;
    padding: 2vw;
    text-align: center;
    font-family: Calibri, Arial, sans-serif;
    color: white;
`

export default function Header() {
    return (
    <StyledHeader>
        <h1>MP-6 OAuth Demo</h1>
    </StyledHeader>
    )
}