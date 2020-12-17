import React from "react"
import styled, {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
    max-width: 320px;
    margin: auto;
    background-color: #18172D;
    fontFamily: "-apple-system, Roboto, sans-serif, serif";
  }

  img {
    height: 99vh;
  }
`

const Main = styled.main`
  display: flex;
  justify-content: center;
`

export default function Layout({ children }) {
  return (
    <Main>
      <GlobalStyle />
      {children}
    </Main>
  )
}