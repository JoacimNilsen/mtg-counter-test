import React from 'react'
import styled from 'styled-components'

const StyledDecrease = styled.button`
width: 100px;
border: none;
background-color:transparent;
outline:none;
`

const Decrease = ({handleClick}) => {
  return (
    <StyledDecrease onClick={handleClick}>
<svg version="1.1" viewBox="0 0 512 512">
<g>
	<g>
		<path d="M256,0C114.853,0,0,114.833,0,256s114.853,256,256,256c141.167,0,256-114.833,256-256S397.147,0,256,0z M256,472.341
			c-119.295,0-216.341-97.046-216.341-216.341S136.705,39.659,256,39.659S472.341,136.705,472.341,256S375.295,472.341,256,472.341z
			"/>
	</g>
</g>
<g>
	<g>
		<path d="M355.148,234.386H156.852c-10.946,0-19.83,8.884-19.83,19.83s8.884,19.83,19.83,19.83h198.296
			c10.946,0,19.83-8.884,19.83-19.83S366.094,234.386,355.148,234.386z"/>
	</g>
</g>
</svg>
</StyledDecrease>
  )
}

export default Decrease