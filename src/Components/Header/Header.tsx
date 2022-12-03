import styled from 'styled-components'

export function Header(){
    return(
        <HeaderStyle>
            <Title>Calculator</Title>

            <Navigator>
                    <a href='#'>Calculator</a>
                    <a href='#'>Average</a>
                    <a href='#'>Price Converter</a>
                    <a href='#'>Github</a>
            </Navigator>

        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    height: 3.2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6.25rem;
    background-color: #0C0C0C;

`

const Navigator = styled.nav`
    display: flex;
    gap: 1  rem;
    font-weight: bold;

    a{
        color: #f1f1f1;

    }
`

const Title = styled.h1`
    color: #f1f1f1;

    font-size: 2rem;
    font-weight: bold;
`