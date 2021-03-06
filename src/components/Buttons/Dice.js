import React, {useState} from 'react'
import styled from 'styled-components'

const StyledDice = styled.button`
width: 100%;
border: none;
background-color:transparent;
outline:none;
`

const DiceWrapper = styled.div`
width: 70px;
display: flex;
align-items: center;
position: relative;
`

const DiceResult = styled.div`
position: absolute;
font-size: 18px;
font-weight: bold;
color: #dedede;
pointer-events: none;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}
`

const randomNumber = () => Math.round(Math.random() * 19 ) + 1

const Dice = () => {
  const [diceRoll, setDiceRoll] = useState(20)
  return (
    <DiceWrapper>
    <StyledDice onClick={() => setDiceRoll(randomNumber())}>
      <svg version="1.1" viewBox="0 0 512 512" >
        <g>
        <g>
        <path d="m476.927 124.764-215.965-123.446c-3.074-1.758-6.851-1.758-9.925 0l-215.964 123.446c-3.115 1.78-5.038 5.094-5.038 8.682v241.944c0 3.549 1.881 6.832 4.942 8.627l215.965 126.61c1.562.916 3.31 1.373 5.058 1.373s3.496-.458 5.058-1.373l215.965-126.61c3.062-1.795 4.942-5.078 4.942-8.627v-241.945c0-3.588-1.923-6.901-5.038-8.681zm-426.892 25.861 73.205 41.573-73.205 141.976zm250.965 47.619h57.15l-102.15 176.929-102.15-176.929h57.15c5.523 0 10-4.477 10-10s-4.477-10-10-10h-55.729l100.729-150.283 100.729 150.283h-55.729c-5.523 0-10 4.477-10 10s4.477 10 10 10zm-63.313 185.21-181.964-16.669 81.302-157.681zm137.287-174.351 81.303 157.682-181.964 16.669zm3.633-34.141-90.576-135.135 163.734 93.59zm-245.214.001-73.157-41.546 163.734-93.59zm112.607 229.336v80.247l-162.23-95.108zm20 0 162.23-14.861-162.23 95.108zm122.76-212.102 73.205-41.573v183.55z"/>
      <circle cx="256" cy="188.244" r="10"/>
      </g>
      </g>
      </svg>
     
    </StyledDice>
     <DiceResult>{diceRoll}</DiceResult>
     </DiceWrapper>
  )
}

export default Dice