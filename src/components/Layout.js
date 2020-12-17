import React from "react"
import styled, {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-x: hidden;
    max-width: 320px;
    margin: auto;
    background-color: #18172D;
    fontFamily: "-apple-system, Roboto, sans-serif, serif";
  }

  * {
    max-width: 100%;
    max-height: 100vh
  }
`

export default function Layout({ children }) {
  return (
    <main>
      <GlobalStyle />
      {children}
    </main>
  )
}