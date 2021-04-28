import React, { useState } from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'


const {Increase, Decrease, Reload, Settings, Wakelock, Dice} = Buttons

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background: rgb(149,16,16);
background: linear-gradient(198deg, rgba(${({topColor}) => topColor ||'149,16,16,1'}) 0%, rgba(${({bottomColor}) => bottomColor ||'0,159,255,1'}) 100%);
`

const ButtonWrapper = styled.div`
display: flex;
`

const LifeCounter1 = styled.p`
font-size: 70px;
line-height: 0;
transform: rotate(180deg);
`

const LifeCounter2 = styled.p`
font-size: 70px;
line-height: 0;
`

const Counter = ({player1Color, player2Color}) => {

  const [player1, setPlayer1] = useState(20)
  const [player2, setPlayer2] = useState(20)

  const [diceRoll, setDiceRoll] = useState(0)

  const clearState = () => {
    setPlayer1(20)
    setPlayer2(20)
  }

  const randomNumber = () => Math.round(Math.random() * 19 ) + 1

  return (
    <Wrapper topColor={player1Color} bottomColor={player2Color}>
      <ButtonWrapper>
      <Decrease handleClick={() => setPlayer1(player1 - 1)} />
      <Increase handleClick={() => setPlayer1(player1 + 1)} />
      </ButtonWrapper>
      <LifeCounter1>{player1}</LifeCounter1>
      <ButtonWrapper>
      <Wakelock />
      <Reload handleClick={() => clearState()} />
      <Settings />
      <Dice handleClick={() => setDiceRoll(randomNumber())} />
      {diceRoll}
      </ButtonWrapper>
      <LifeCounter2>{player2}</LifeCounter2>
      <ButtonWrapper>
      <Increase handleClick={() => setPlayer2(player2 + 1)} />
      <Decrease handleClick={() => setPlayer2(player2 - 1)} />
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Counter