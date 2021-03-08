import React from 'react'
import ReactNoSleep from 'react-no-sleep'

const Wakelock = () => {
  return(

<ReactNoSleep>
{({ isOn, enable, disable }) => (
  <button onClick={isOn ? disable : enable}>
    {isOn ? 'on' : 'off'}
  </button>
)}
</ReactNoSleep>
)
}

export default Wakelock