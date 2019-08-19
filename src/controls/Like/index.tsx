import React from 'react'
import styled from 'styled-components'

export type Props = {
  count: number
  onClick?: (count: number) => void
}

export const Container = styled.button``

export default function Like({ count, onClick }: Props) {
  const handleClick = () => {
    onClick && onClick(count + 1)
  }

  return <Container onClick={handleClick}>{count}</Container>
}
