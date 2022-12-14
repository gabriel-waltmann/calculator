import React, { useContext } from "react"
import { valuesContext } from "../Index"
import { Container } from "./Style/Index"

export function Buttons(){

    type buttonsDataType = {
        group: string, 
        name: string, 
        value: null | string
    }
    const buttonsData: buttonsDataType[] = [
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
            value: `*`},

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

    type ContextType = {
            value: string,
            function: any
        }
        
    const context: null | any = useContext(valuesContext)
    const calc: ContextType = context.calc
    const calcValue: string = calc.value
    const calcFunction: any = calc.function
    const result: ContextType = context.result
    const resultFunction: any = result.function

    const updateCalc = (data: any) =>{
        

        const group = data.group
        const value = data.value
        const name = data.name

        const conditions = () => {
            if(group == `number`) { 
                calcFunction(calcValue + value) // Union Values
            }
            else if(name == `delete`) {
                calcFunction(calcValue.slice(0, -1)) // Delete last value
            }
            else if(name == `clear`) {
                calcFunction(calcValue.replace(calcValue, ``)) // Clear string 
                resultFunction(null)
            }
            else if(name == `result`){
                result.function(eval(calcValue)) // get result
            }else if(group == `operator`){
                const lastValue = calcValue[calcValue.length-1]
                console.log(lastValue)
                if(value != lastValue){
                    if(
                        lastValue != `x` &&
                        lastValue != `*` &&
                        lastValue != `-` &&
                        lastValue != `+` 
                    )
                    calcFunction(calcValue+value) // Union  Operator 
                }
            }
        }

        conditions()
    }

    function CreateAllTheButtons(){
        type DataTypes = {
            name: string, 
            group: string
        }

        const createButton = (data: DataTypes) => {

            const name = data.name
            const group = data.group
            const className = group + ` ` + name
            const src = `/assets/buttons/${name}.png`
            const img = <img src={src}/>
            
            return (
                <button 
                className={className} 
                onClick={()=> updateCalc(data)}
                key={className}
                >
                {img}
                </button>
            )
        }

        return buttonsData.map(data => createButton(data))     
    }
    return (
        <Container>
                {CreateAllTheButtons()}   
        </Container>
    )
}