import React from 'react'
import ReactNoSleep from 'react-no-sleep'
import styled from 'styled-components'

const NoSleep = styled.button`
 display: inline-block;
 width: 100px;
 border: 0.4em solid #000000;
 border-radius: 1em;
 box-sizing: border-box;
 text-decoration: none;
 font-family: 'Roboto',sans-serif;
 font-weight: 300;
 color: #000000;
 text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
 background-color: transparent;
 text-align: center;
 outline: none;
`

const Wakelock = () => {
  return(

<ReactNoSleep>
  
{({ isOn, enable, disable }) => (
  <NoSleep onClick={isOn ? disable : enable}>
    {isOn ? 'Wakelock: ON ' : 'Wakelock: OFF'}
  </NoSleep>
)}
</ReactNoSleep>
)
}

export default Wakelock