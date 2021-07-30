import React, { useState } from 'react'
import FetchButton from '../presentational_components/FetchButton'
import Table from '../presentational_components/Table'
import client from '../utils'

// This is Container component, This is where all business logics stuffs are happening here

function FetchData() {
  const [data, setData] = useState([]) // useState hook for storing data from server and provide data to Table component

  const GetData = () => {
    // This function is used to retrieve and store data to useState hook from server
    client('/posts') // This client callback is a Fetch Api Wrapper
      .then((response) => setData(response)) // this callback stores data to useState hook
      .catch((error) => console.log(error))
  }

  return (
    <>
      <FetchButton onClick={GetData} text='Fetch Data' />
      <p />
      <Table TableData={data} />
    </>
  )
}

export default FetchData
