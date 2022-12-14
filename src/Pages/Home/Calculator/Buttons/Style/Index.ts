import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    height: 65%;
    grid: repeat(5,70px) / repeat(4,90px);
    justify-content: center;
    align-content: center;
    grid-auto-flow: dense;

    button{
        background-color: #00000000;
        border: none;
        &.operator{
            grid-column: 4;
            img{
                max-height: 60px;
                max-width: 80px;
            }
        }
        &.result{
            grid-row: 5;
            grid-column: 3 / 5 ;
        }
        &:hover{
            cursor: pointer;
        }  
    }
`