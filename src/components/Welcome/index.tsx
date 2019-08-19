import React, { useState } from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import Like from '~/controls/Like'

// CSS动画支持
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const FadeInButton = styled.button`
  animation: 1s ${fadeIn} ease-out;
`

// 将通用的样式注入到全局中
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: lightcoral;
  }
`

export const Container = styled.div`
  text-align: center;
`

// 组件内部使用className
export const Wrapper = styled.section`
  margin: 0 auto;
  width: 300px;
  text-align: center;
  h4 {
    font-size: 14px;
    &:hover {
      color: #ff00ff;
    }
  }
  .detail {
    color: #ccc;
  }
`
// 基于props定制主题
export const Button = styled.button.attrs({
  className: 'small'
})`
  background-color: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

// 组件样式继承
export const TomatoButton = styled(Button)`
  color: ${props => props.primary ? 'white' : 'tomato'};;
  background-color: ${props => props.primary ? 'tomato' : 'white'};
  border-color: tomato;
`
// 组件样式继承
export const PassWord = styled.input.attrs({
  type: 'password'
})`
  color: lightblue;
  font-size: 1em;
  border: 2px solid lightblue;
  border-radius: 3px;
`

export default function Welcome() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <h1>Thanks for using tacer.</h1>
      <p>
        Click <Like count={count} onClick={setCount} /> if you like this tool.
      </p>
      <Wrapper>
        {count === 1 && <FadeInButton>css animation</FadeInButton>}
        <PassWord></PassWord>
        <h4>Hello h4</h4>
        <div className="detail">Hello detail</div>
        <Button>Hello styled</Button>
        <Button primary>Hello styled</Button>
        <TomatoButton>Hello styled</TomatoButton>
        <TomatoButton primary>Hello styled</TomatoButton>
      </Wrapper>
    </Container>
  )
}
