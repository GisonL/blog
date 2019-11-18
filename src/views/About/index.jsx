import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styles from './styles.scss'

const About = props => {
  const goHome = () => {
    props.history.push('/home')
  }

  return (
    <div>
      <p className={styles.title}>this is about</p>
      {/* <p className="title">this is about</p> */}
      <Link to="/home">go home</Link>
      <div onClick={goHome}>aaa</div>
    </div>
  )
}

export default withRouter(About)
