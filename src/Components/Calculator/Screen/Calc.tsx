import styled from "styled-components";
import { useEffect, useState } from "react";
let buttons: any[] = []

export function Calc(props:any){
    addListenersOnButtons()

    return(
        <Container className="calcScreen">0</Container>
    )
}

function addListenersOnButtons(){
    useEffect(()=> {
        const tool: any = document.querySelectorAll(`.tool`) 
        const operator: any = document.querySelectorAll(`.operator`) 
        const number: any = document.querySelectorAll(`.number`) 

        const buttons = [
            ...[...tool], 
            ...[...operator], 
            ...[...number]
        ]

        buttons.map( (button)=>{
            button.addEventListener('click', ()=>{
                console.log(button)
            })

        })
    } , [])
}

const Container = styled.h2`
    text-align: start;
    font-size: 4rem;
`
