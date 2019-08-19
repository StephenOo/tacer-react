import React from 'react'
import styled from 'styled-components'
import Welcome from '../components/Welcome'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function() {
  return (
    <Container>
      <Welcome />
    </Container>
  )
}
