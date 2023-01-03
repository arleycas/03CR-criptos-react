import React from 'react'
import styled from '@emotion/styled'

const ContError = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`

export default function Error({ children }) {
  return (
    <ContError>
      {children}
    </ContError>
  )
}
