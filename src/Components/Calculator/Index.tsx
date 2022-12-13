import { useEffect, useState } from "react";
import styled from "styled-components"

const Container = styled.section` //Style
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

export function Calculator(){
    const createButtons = () => { 
        const datas = [
            {group: `tool`,
            name: 'delete',
            value: null},

            {group: `tool`,
            name: 'clear',
            value: null},

            {group: `tool`,
            name: 'percentage',
            value: null},

            {group: `operator`,
            name: 'division',
            value: `/`},

            {group: `operator`,
            name: 'multiplication',
            value: `x`},

            {group: `operator`,
            name: 'subtraction',
            value: `-`},

            {group: `operator`,
            name: 'addition',
            value: `+`},

            {group: `number`,
            name: 'number7',
            value: `7`},

            {group: `number`,
            name: 'number8',
            value: `8`},

            {group: `number`,
            name: 'number9',
            value: `9`},

            {group: `number`,
            name: 'number4',
            value: `4`},

            {group: `number`,
            name: 'number5',
            value: `5`},

            {group: `number`,
            name: 'number6',
            value: `6`},

            {group: `number`,
            name: 'number1',
            value: `1`},

            {group: `number`,
            name: 'number2',
            value: `2`},

            {group: `number`,
            name: 'number3',
            value: `3`},

            {group: `number`,
            name: 'number0',
            value: `0`},

            {group: `number`,
            name: 'point',
            value: `.`},

            {group: ``,
            name: 'result',
            value: null}
        ]

        const createButton = (data: any) => {
            const className = data.group + ` ` + data.name
            const img = <img src={`src/assets/${data.name}.png`}/>
            return (
                <button 
                className={className} 
                onClick={()=> updateCalcAndResult(data)}
                key={className}
                >
                    {img}
                </button>
            )
        }

        return datas.map(data => createButton(data))
    }

    const updateCalcAndResult = (data: any) =>{
        const group = data.group
        const value = data.value
        const name = data.name
        const functions = {
            concatenate: () => setCalc(calc+value),

            deleteLastValue: ()=> setCalc(calc.slice(0, -1)),

            clear: ()=> setCalc(calc.replace(calc, ``)),

            showResult: ()=> setResult(eval(calc)),

            addOperator: ()=> {
                const lastValue = (calc[calc.length-1])
                if(value != lastValue)setCalc(calc+value)
                else console.log(lastValue)
            }
        }

        if(group == `number`) {
            functions.concatenate()
        }
        else if(name == `delete`) {
            functions.deleteLastValue()
        }
        else if(name == `clear`) {
            functions.clear()
        }
        else if(name == `result`){
            functions.showResult()
            functions.clear()
        }else if(group == `operator`){
            functions.addOperator()
        }
    }

    const [calc, setCalc] = useState(``)
    const [result, setResult] = useState(0)

    return(
        <Container>
            <div className="screen">
                <div className="history">9 x 15 = 135</div>
                <div className="calc">{calc}</div>
                <div className="result">{result}</div>
            </div>
            <div className="keyboard">
                {createButtons()}
            </div>
        </Container>
    )
}
