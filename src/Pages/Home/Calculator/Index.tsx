
import { useState, useEffect, useContext, createContext } from 'react';
import { Screen } from './Screen/Index'
import { Container } from './Style/Index';
import { Buttons } from './Buttons/Index';
export const valuesContext = createContext<null | object>(null)

export function Calculator(){
    
    
    const [calc, setCalc] = useState(``)
    const [result, setResult] = useState(null)
    const [lastCalc, setLastCalc] = useState(``)

    useEffect(()=>{
        const string = `${calc} = ${result}`
        if(result != null) setLastCalc(string)
    }, [result])


    const values ={
        calc: {
            value: calc,
            function: setCalc
        }, 
        result: {
            value: result,
            function: setResult
        }, 
        lastCalc: {
            value: lastCalc,
            function: setLastCalc
        } 
    }

    return(
        
        <Container>
            <valuesContext.Provider  value={values}>
                <Screen/>
                <Buttons/>
            </valuesContext.Provider>
        </Container>
    )
}
