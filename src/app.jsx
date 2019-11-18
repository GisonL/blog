import React from 'react'
import { render } from 'react-dom'
import { HashRouter as RouterC, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import PageNotFound from './views/PageNotFound'
import { Layout } from '@Gnui'
/* 
class App extends Component {
  render() {
    return (
      <RouterC>
        <Layout>
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
        </Layout>
      </RouterC>
    )
  }
}
 */
render(
  <RouterC>
    <Layout>
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
    </Layout>
  </RouterC>,
  document.getElementById('app')
)
