export default function callAPI(data) {
    return new Promise((resolve, reject) => {
      
      // const url = `http://localhost:3001/items`
      const url = `https://5e6c54c2d708a000160b5045.mockapi.io/test_item_add/${data.id}`
      fetch(url, {
        method: "PUT",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(data)
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
  