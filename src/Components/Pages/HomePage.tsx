import { Component, useState } from 'react'
import {createGlobalStyle } from 'styled-components'
import { Header } from '../Header/Header'

export function HomePage() {
  // const [count, setCount] = useState(0)

/*         <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
 */
  return (
    <>
    <Header/>
      <Globalstyle/>
    </>
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
  }

  body{
    height: 100vh;
    width: 100vw;
  }
`