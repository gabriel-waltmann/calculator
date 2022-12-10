import styled from "styled-components";
import { Buttons } from "./Buttons/Buttons";
import { Calc } from "./Screen/Calc";
import { History } from "./Screen/History";
import { Result } from "./Screen/Result";

export function Calculator(){
    return(
        <Container>
            <Screen>
                <History/>
                <Calc/>
                <Result/>
            </Screen>
            
            <Buttons/>
        </Container>
    )
}

const Container = styled.div`
    height: 37.5rem;
    width: 25rem;
    display: grid;
    grid: 35% 65% / 100%;
    background-color: #0C0C0C;
    border-radius: 1rem;
`

const Screen = styled.div`
    padding: 0 1.5rem;
    display: grid;
    grid: 50% 50% / 50% 50%;
    border-bottom: 0.12rem solid #000;
`

