 
import styled from '@emotion/styled'
import React from 'react'

const ErrorText = styled.div`
background-color: red;
color: #fff;
padding: 25px;
font-size:22px;
text-transform: uppercase;
font-family: 'lato', sans-serif;
font-weight: 900;
text-align: center;
border-radius: 15px;
`

const ErrorMsg = ({children}) =>  {
    return (
    <ErrorText>{children}</ErrorText>
  )
}

export default ErrorMsg