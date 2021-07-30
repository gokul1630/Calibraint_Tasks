import React from 'react'
import styles from '../styles.module.css'

/*
 * Button to Fetch Data from server, onClick call and text for button is commimg from parent component,
 * so this Button component can be easy to reusable
 * In this Button Component i used css modules for styling
 */
const RefreshButton = (props) => {
  return (
    <button className={styles.button} onClick={() => props.onClick()}>
      {props.text}
    </button>
  )
}

export default RefreshButton
