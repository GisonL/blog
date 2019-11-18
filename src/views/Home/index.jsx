import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss'

const Home = props => {
  return (
    <div className={styles.homePage}>
      <p className={styles.title}>this is home!</p>
      <Link to="/about">go about</Link>
    </div>
  )
}

export default Home
