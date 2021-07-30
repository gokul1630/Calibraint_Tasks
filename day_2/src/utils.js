const URL = 'https://jsonplaceholder.typicode.com'

/*
 *  This client function is Fetch Api Wrapper it can be reusable in whole Application
 *  instead of calling 'fetch()' Again and Again in different Components
 */

const client = (endPoint) => {
  /*
   *  Async Function is used to extract the json body content from response
   *  so it prevents returning data until response.json() method completes it work
   *  Promise rejection callback is used to return rejected data,
   *  it prevents throwing error in then() callback
   */
  return fetch(`${URL}${endPoint}`).then(async (res) => {
    const data = await res.json()
    if (res.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}
export default client
