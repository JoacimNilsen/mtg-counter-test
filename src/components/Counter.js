import React, { useState } from 'react'

const Counter = () => {

  const [player1, setPlayer1] = useState(20)
  const [player2, setPlayer2] = useState(20)

  return (
    <div>
      <p>Player 1:{player1}</p>
      <button onClick={() => setPlayer1(player1 + 1)}>+</button>
      <button onClick={() => setPlayer1(player1 - 1)}>-</button>
      <p>Player 2:{player2}</p>
      <button onClick={() => setPlayer2(player2 + 1)}>+</button>
      <button onClick={() => setPlayer2(player2 - 1)}>-</button>
    </div>
  )
}

export default Counter