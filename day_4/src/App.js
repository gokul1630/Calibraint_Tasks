import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentTable from './Components/ContentTable';
import { error, newPost } from './redux/PostSlice';
import './styles/styles.css';

const URL = 'https://jsonplaceholder.typicode.com/posts/';

function App() {
  const dispatch = useDispatch(); //  useDispatch() is used to dispatch actions to store for changing state
  const postData = useSelector((state) => state.posts); // useSelector() is used to access state from store

  useEffect(() => {
    function getData() {
      axios
        .get(URL)
        .then(
          (response) =>
            dispatch(newPost({ loading: false, data: response.data })) //dispatches data to reducers for changing state
        )
        .catch((err) => {
          dispatch(error({ loading: false, error: `${err}` }));
        });
    }
    return setTimeout(getData, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <ContentTable tableData={postData} />
    </div>
  );
}

export default App;
