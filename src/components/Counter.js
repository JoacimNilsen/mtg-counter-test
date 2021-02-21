import React, { useState } from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'

const {Increase, Decrease, Reload} = Buttons

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const ButtonWrapper = styled.div`
display: flex;
`

const LifeCounter1 = styled.p`
font-size: 70px;
transform: rotate(180deg);
`

const LifeCounter2 = styled.p`
font-size: 70px;
`

const Counter = () => {

  const [player1, setPlayer1] = useState(20)
  const [player2, setPlayer2] = useState(20)

  const clearState = () => {
    setPlayer1(20)
    setPlayer2(20)
  }

  return (
    <Wrapper>
      <ButtonWrapper>
      <Decrease handleClick={() => setPlayer1(player1 - 1)} />
      <Increase handleClick={() => setPlayer1(player1 + 1)} />
      </ButtonWrapper>
      <LifeCounter1>{player1}</LifeCounter1>
      <Reload handleClick={() => clearState()} />
      <LifeCounter2>{player2}</LifeCounter2>
      <ButtonWrapper>
      <Increase handleClick={() => setPlayer2(player2 + 1)} />
      <Decrease handleClick={() => setPlayer2(player2 - 1)} />
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Counter