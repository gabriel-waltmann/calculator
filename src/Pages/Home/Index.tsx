import { Component, useState } from 'react'
import styled, {createGlobalStyle } from 'styled-components'
import { Calculator } from './Calculator/Index'

import { Header } from './Header/Index'

export function HomePage() {
  
  return (
    <Container>
      <Globalstyle/>
      <Header/>
      <Calculator/>

    </Container>
  )
}

const Globalstyle = createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    color: #000000;
  }

  body{
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;

    @media (max-width: 600px) {
        background-color: #0C0C0C;
    }
  }
`
const Container = styled.main`

  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`