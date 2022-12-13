import styled from "styled-components";

export function Screen(){
    return(
        <Container>

        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid: repeat(5,70px) / repeat(4,90px);
    justify-content: center;
    align-content: center;
    grid-auto-flow: dense;
`