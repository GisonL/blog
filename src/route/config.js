// import asyncComponent from '../helpers/asyncComponent'
// export { default as Home } from '../views/Home'
// export Main from './main/'
export const Home = async () =>
  await import(/* webpackChunkName:'Home' */ '../views/Home')

export const About = async () =>
  await import(/* webpackChunkName:'About' */ '../views/About')

export const PageNotFound = async () => {
  await import(/* webpackChunkName:'PageNotFound' */ '../views/PageNotFound')
}
