import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Counter from './components/Counter'
import { createGlobalStyle } from 'styled-components'
import Settings from './components/Settings'

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  }
`

const App = () => {

  const [player1Color, setPlayer1Color] = useState('')
  const [player2Color, setPlayer2Color] = useState('')

  return (
    <div className="App">
      <Router>
      <GlobalStyle />
      <Switch>
          <Route path="/settings">
            <Settings handleP1Change={(event)=> setPlayer1Color(event.target.value)} handleP2Change={(event)=> setPlayer2Color(event.target.value)} />
          </Route>
          <Route path="/">
            <Counter player1Color={player1Color} player2Color={player2Color}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
