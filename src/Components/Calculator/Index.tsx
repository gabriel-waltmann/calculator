import { useEffect, useState } from "react";
import { Container } from "./Style/Index";


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

            clear: () => {
                setCalc(calc.replace(calc, ``))
                setResult(0)
            },

            showResult: ()=> setResult(eval(calc)),

            addOperator: ()=> {
                const lastValue = (calc[calc.length-1])
                if(value != lastValue)setCalc(calc+value)
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
        }else if(group == `operator`){
            functions.addOperator()
        }
    }

    const [calc, setCalc] = useState(``)
    const [result, setResult] = useState(0)
    const [lastCalc, setLastCalc] = useState(``)

    useEffect(()=>{
        if(result != 0) setLastCalc(calc + ` = ` + result)
    }, [result])

    return(
        <Container>
            <div className="screen">
                <div className="history">{lastCalc}</div>
                <div className="calc">{calc}</div>
                <div className="result">{result}</div>
            </div>
            <div className="keyboard">
                {createButtons()}
            </div>
        </Container>
    )
}
