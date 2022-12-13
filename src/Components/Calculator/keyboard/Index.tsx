import styled from "styled-components"
/*export function Keybord(){
    const Container = styled.div`
        display: grid;
        grid: repeat(5,70px) / repeat(4,90px);
        justify-content: center;
        align-content: center;
        grid-auto-flow: dense;
    `
    return (
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

function Button(className: any, ){
    const Button = styled.button`
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
    return(
        <Button
        className={className} 
        onClick={ event => {
            console.log(className)
        }}>
            <img 
                src={`src/assets/${props.function}.png`} 
                alt={`button ${value}`} 
            />
        </Button>
    )
}

 function Icon(className: string, function: string): any{
    return(
        <Image
        className={className} 
        onClick={ event => {
            console.log(className)
        }}>
            <img 
                src={`src/assets/${props.function}.png`} 
                alt={`button ${value}`} 
            />
        </Image>
    )

} 


}
*/



