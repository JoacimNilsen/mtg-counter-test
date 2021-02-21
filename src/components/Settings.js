import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Settings = ({handleP1Change, handleP2Change}) => {
  return (
    <>
    <Link to="/">Back</Link>
    
<select onChange={handleP1Change} name="cars" id="cars">
    <option value="194, 33, 33, 1">Red</option>
    <option value="53, 191, 25, 1">Green</option>
    <option value="10, 10, 10, 1">Black</option>
    <option value="242, 242, 242, 1">White</option>
    <option value="0, 51, 153, 1">Blue</option>
   
</select>
<select onChange={handleP2Change} name="cars" id="cars">
    <option value="194, 33, 33, 1">Red</option>
    <option value="53, 191, 25, 1">Green</option>
    <option value="10, 10, 10, 1">Black</option>
    <option value="242, 242, 242, 1">White</option>
    <option value="0, 51, 153, 1">Blue</option>
  
</select>
</>
  )
}

export default Settings