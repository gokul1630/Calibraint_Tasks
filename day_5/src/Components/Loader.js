import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/loader.css'
import LoaderIcon from './LoaderIcon'

function Loader(props) {
  const history = useHistory()
  useEffect(() => {
    let user = localStorage.getItem('user')
    if (user) {
      history.push('/todos')
    } else {
      history.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="loader">
      <LoaderIcon />
    </div>
  )
}

export default Loader
