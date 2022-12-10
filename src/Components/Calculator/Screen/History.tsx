import styled from "styled-components";

export function History(props: any){
    return(
        <Container>9 X 15 = 135</Container>
    )
}

const Container = styled.h3`
    grid-column: 1 / span 2;
    color: #1C91C3;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: end;
`
