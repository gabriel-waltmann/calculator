import styled from "styled-components";

export const Container = styled.header`
    position: absolute;
    top: 0;
    display: flex;
    height: 70px;
    background-color: #0c0c0c;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    .logo{
        font-size: 50px;
        color: #f1f1f1;
    }

    @media (max-width: 600px) {
        &{
            height: 10%;
            flex-direction: column;
        }
    }
`

export const Navigator = styled.nav`
    display: flex;
    gap: 15px;
    a{
        font-size: 18px;
        color: #f1f1f1;
    }
`


