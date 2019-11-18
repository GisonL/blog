import React from 'react'
import { HashRouter as RouterC, Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import PageNotFound from '../views/PageNotFound'
// import { Home, About, PageNotFound } from './config'

const Router = () => {
  return (
    <RouterC>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <PageNotFound />
        </Route>
      </Switch>
    </RouterC>
  )
}

export default Router
