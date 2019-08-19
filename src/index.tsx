import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './components/Welcome/index'
import Index from './containers/Index'


render(
  <Router>
    <GlobalStyle></GlobalStyle>
    <Switch>
      <Route path="/" component={Index} exact />
    </Switch>
  </Router>,
  document.getElementById('app')
)
