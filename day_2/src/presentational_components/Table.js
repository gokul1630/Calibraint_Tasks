import React from 'react'
import styles from '../styles.module.css'
/*
 * Table Component for Presenting Data from Server
 * In this Table Component i used css modules for styling the table
 */
function Table(props) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          <th className={styles.th}>User Id</th>
          <th className={styles.th}>Title</th>
          <th className={styles.th}>Body</th>
        </tr>
      </thead>
      <tbody>
        {props.TableData.map((items) => (
          <tr className={styles.tr} key={items.id}>
            <td className={styles.td}>{items.id}</td>
            <td className={styles.td}>{items.title}</td>
            <td className={styles.td}>{items.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
