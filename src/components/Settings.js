import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background: grey;
`

const Select = styled.select`
  
`

const Settings = ({handleP1Change, handleP2Change}) => {
  return (
    <Wrapper>
    <Link to="/">Back</Link>
<p>Player 1:</p>    
<Select onChange={handleP1Change} name="cars" id="cars">
    <option value="" disabled selected>Select your color</option>
    <option value="194, 33, 33, 1">Red</option>
    <option value="53, 191, 25, 1">Green</option>
    <option value="10, 10, 10, 1">Black</option>
    <option value="242, 242, 242, 1">White</option>
    <option value="0, 51, 153, 1">Blue</option>
</Select>
<p>Player 2:</p>
<Select onChange={handleP2Change} name="cars" id="cars">
    <option value="" disabled selected>Select your color</option>
    <option value="194, 33, 33, 1">Red</option>
    <option value="53, 191, 25, 1">Green</option>
    <option value="10, 10, 10, 1">Black</option>
    <option value="242, 242, 242, 1">White</option>
    <option value="0, 51, 153, 1">Blue</option>
</Select>
</Wrapper>
  )
}

export default Settings