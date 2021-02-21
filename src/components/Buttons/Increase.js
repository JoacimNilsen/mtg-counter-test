import React from 'react'
import styled from 'styled-components'

const StyledIncrease = styled.button`
width: 100px;
border: none;
background-color:transparent;
outline:none;
`

const Increase = ({handleClick}) => {
  return (
    <StyledIncrease onClick={handleClick}>
<svg version="1.1" viewBox="0 0 512 512">
<g>
	<g>
		<path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.853,256-256S397.167,0,256,0z M256,472.341
			c-119.275,0-216.341-97.046-216.341-216.341S136.725,39.659,256,39.659S472.341,136.705,472.341,256S375.295,472.341,256,472.341z
			"/>
	</g>
</g>
<g>
	<g>
		<path d="M355.148,234.386H275.83v-79.318c0-10.946-8.864-19.83-19.83-19.83s-19.83,8.884-19.83,19.83v79.318h-79.318
			c-10.966,0-19.83,8.884-19.83,19.83s8.864,19.83,19.83,19.83h79.318v79.318c0,10.946,8.864,19.83,19.83,19.83
			s19.83-8.884,19.83-19.83v-79.318h79.318c10.966,0,19.83-8.884,19.83-19.83S366.114,234.386,355.148,234.386z"/>
	</g>
</g>
</svg>
</StyledIncrease>
  )
}

export default Increase

