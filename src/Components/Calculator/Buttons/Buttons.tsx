import { useEffect, useState } from "react";
import styled from "styled-components";

export function Buttons(){
    return(
        <Container>
            <Button  className='tool' function='delete'/>
            <Button className='tool' function='clear'/>
            <Button className='tool' function='percentage'/>

            <Button className='operator' function="division"/>
            <Button className='operator' function="multiplication"/>
            <Button className='operator' function="subtraction"/>
            <Button className='operator' function="addition"/>

            <Button className='number' function="number9"/>
            <Button className='number' function="number8"/>
            <Button className='number' function="number7"/>
            <Button className='number' function="number6"/>
            <Button className='number' function="number5"/>
            <Button className='number' function="number4"/>
            <Button className='number' function="number3"/>
            <Button className='number' function="number2"/>
            <Button className='number' function="number1"/>
            <Button className='number' function="number0"/>
            <Button className='point' function="point"/>

            <Button className='result' function="result"/>
          
        </Container>
    )
}

type buttonProps = {
    function: String,
    className: any
}


function Button(props: buttonProps){
    
    return(
        <Icon className={props.className + " " + props.function}>
            <img 
                src={`src/assets/${props.function}.png`} 
                alt={`button ${props.function}`} 
            />
        </Icon>
    )
}

const Container = styled.div`
    display: grid;
    grid: repeat(5,70px) / repeat(4,90px);
    justify-content: center;
    align-content: center;
    grid-auto-flow: dense;
`

const Icon = styled.button`
    background-color: #00000000;
    border: none;
    &.others{
        grid-row: 1;
    }
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
`