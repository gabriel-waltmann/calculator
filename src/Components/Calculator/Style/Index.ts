import styled from "styled-components"
export const Container = styled.section` //Style
    height: 600px;
    width: 400px;
    display: flex;
    flex-direction: column;
    background-color: #0C0C0C;
    border-radius: 1rem;
    .screen{
        display: grid;
        grid: repeat(2, 50%)/ repeat(2, 50%);
        grid-auto-flow: dense;
        width: 100%;
        height: 35%;
        justify-items: center;
        .history{
            grid-column: 1 / span 2;
            color: #1C91C3;
            font-size: 2.5rem;
            height: 100%;
            width: 100%;
            padding-right: 30px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .result{
            height: 100%;
            width: 100%;
            font-size: 4rem;
            text-align: end;
            padding-right: 30px;
            color: #f1f1f1
        }
        .calc{
            height: 100%;
            width: 100%;
            text-align: center;
            font-size: 4rem;
            color: #f1f1f1
        }
    }
    .keyboard{
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
    }
`