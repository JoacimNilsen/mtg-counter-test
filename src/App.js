import React from 'react'
import Counter from './components/Counter'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  }
`

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Counter/>
    </div>
  )
}

export default App;
