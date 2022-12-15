import { useContext } from "react"
import { valuesContext } from "../Index"
import { Container } from "./Style/Index"


export function Screen(){
    const context: null | any = useContext(valuesContext)
    const calc = context.calc.value
    const result = context.result.value
    const lastCalc = context.lastCalc.value

    return (
        <Container>
                    <div className="lastCalc">{lastCalc}</div>
                    <div className="calc">{calc}</div>
                    <div className="result">= {result}</div>
        </Container>
    )
}