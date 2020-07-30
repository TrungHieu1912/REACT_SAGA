export default function callAPI(data) {
    return new Promise((resolve, reject) => {
      
      const url = `http://localhost:3001/items/${data}`
      // const url = `https://5e6c54c2d708a000160b5045.mockapi.io/test_item_add/${data}`
      fetch(url, {
        method: "DELETE"
      })
        //.then((response) => response.json())
        .then((response) => response.json())
        .then((res) => {
            //console.log(res)
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  