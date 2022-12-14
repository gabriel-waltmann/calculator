import styled  from 'styled-components';


export const Container = styled.div`
    display: grid;
    grid: repeat(2, 50%)/ repeat(2, 50%);
    grid-auto-flow: dense;
    width: 100%;
    height: 35%;
    justify-items: center;
    letter-spacing: 3px;

    .lastCalc{
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
        font-size: 3rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #f1f1f1
    }
    .calc{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: #f1f1f1
    }
`