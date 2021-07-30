const data = new Promise((resolve, reject) => {
  let dataLoadedFromServer = true;

  if (dataLoadedFromServer) {
    // if data loaded from server it calls resolve callback then gives back a data
    resolve({
      data: 'Data retrived From Server',
    });
  } else {
    // if data isn't loaded simply it calls error callback and returns error message
    reject({
      error: "Data Can't be retrived",
    });
  }
});

/*
 * data retrived using Then Catch Callbacks
 *
 */
data
  .then((response) => {
    console.log();
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

/*
 * data retrived using async await functions
 *
 */
async function init() {
  try {
    let response = await data;
    console.log(response);
  } catch (error) {
    console.log();
    console.log(error);
  }
}
init();
