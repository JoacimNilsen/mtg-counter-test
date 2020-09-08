import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const ButtonWrapper = styled.div`
display: flex;
`

const LifeCounter1 = styled.p`
font-size: 40px;
transform: rotate(180deg);
`

const LifeCounter2 = styled.p`
font-size: 40px;
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
      <button onClick={() => setPlayer1(player1 - 1)}>-</button>
      <button onClick={() => setPlayer1(player1 + 1)}>+</button>
      </ButtonWrapper>
      <LifeCounter1>{player1}</LifeCounter1>
      <button onClick={() => clearState()}>O</button>
      <LifeCounter2>{player2}</LifeCounter2>
      <ButtonWrapper>
      <button onClick={() => setPlayer2(player2 + 1)}>+</button>
      <button onClick={() => setPlayer2(player2 - 1)}>-</button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Counter