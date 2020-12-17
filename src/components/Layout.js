import React from "react"
import { Helmet } from "react-helmet"
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
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1 user-scalable=no"/>
      </Helmet>
      <GlobalStyle />
      {children}
    </Main>
  )
}