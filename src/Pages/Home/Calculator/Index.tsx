
import { useState, useEffect } from 'react';
import { Container, Keyboard, Screen } from './Style/Index';

export function Calculator(){
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

    const updateCalc = (data: any) =>{
        const group = data.group
        const value = data.value
        const name = data.name

        const concatenate = () => {
            setCalc(calc + `` + value)
        }
        const deleteLastValue = ()=> {
            setCalc(calc.slice(0, -1))
        }
        const clear = ()=> {
            setCalc(calc.replace(calc, ``))
            setResult(null)
        }
        const showResult = ()=> {
            setResult(eval(calc))
        }
        const addOperator = ()=> {
                const lastValue = (calc[calc.length-1])
                const operators = `*/+-`
                if(value != lastValue){
                    if(operators.indexOf(value) != -1)
                    return setCalc(calc+value)
                }
        }
        const actions = () => {
            if(group == `number`) {
                concatenate()
            }
            else if(name == `delete`) {
                deleteLastValue()
            }
            else if(name == `clear`) {
                clear()
            }
            else if(name == `result`){
                showResult()
            }else if(group == `operator`){
                addOperator()
            }
        }
        actions()
    }

    function CreateAllTheButtons(){
        const createButton = (data: any) => {
            const name = data.name
            const group = data.group
            const className = group + ` ` + name
            const src = `src/assets/buttons/${name}.png`
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
        return datas.map(data => createButton(data))     
    }

    const showResult= () => { 
        if(result === null) return `${`= __`}`
        else return `= ` + result
    }

    const [calc, setCalc] = useState(``)
    const [result, setResult] = useState(null)
    const [lastCalc, setLastCalc] = useState(``)

    
    useEffect(()=>{
        const string = `${calc} = ${result}`
        if(result != null) setLastCalc(string)
    }, [result])



    return(
        <Container>
            <Screen>
                <div className="lastCalc">{lastCalc}</div>
                <div className="calc">{calc}</div>
                <div className="result">{showResult()}</div>
            </Screen>
            
            <Keyboard>
                    {CreateAllTheButtons()}
            </Keyboard>
        </Container>
    )
}
