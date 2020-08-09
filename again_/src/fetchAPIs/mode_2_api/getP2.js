export default function callAPI() {
    return new Promise((resolve, reject) => {
    
        // const url = `http://localhost:3001/items`
        const url = `https://5e6c54c2d708a000160b5045.mockapi.io/test_item_add`
        fetch(url, {
          method: "GET",
          headers: {"Content-type": "application/json"},
          body: JSON.stringify(data),
        //   token: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjgzZDcwMTI4ZmRjNThmZmFlNTE4MTI0NmRmZjk0NDMxZGVmOGMyNzU4YzEyMjE4NDYwMjliNDIzYzNkNTJiOTU4NGM4YmFmNTExYzc2NDM3In0.eyJhdWQiOiIxIiwianRpIjoiODNkNzAxMjhmZGM1OGZmYWU1MTgxMjQ2ZGZmOTQ0MzFkZWY4YzI3NThjMTIyMTg0NjAyOWI0MjNjM2Q1MmI5NTg0YzhiYWY1MTFjNzY0MzciLCJpYXQiOjE1OTQwMDY3MjAsIm5iZiI6MTU5NDAwNjcyMCwiZXhwIjoxNjI1NTQyNzIwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.GUKdfsHblBPw1L5qDyD_7YYtEwGY5AzajHdXH2RYh159rstGFsM30Btilau0nPM_pMX8Zq-XK3OUWWj8Bg5WhdCP9BQPIzlmRRyqXFilKGmWEY2UxktbL0II4PJZJrppBtolkGOXABuy7WWRgvMR0GD6DoT3X7pNQAQkyffqwdaO9S7iog_j3A_D8P35gCSXSRgbhcegho5XBCdh83-hWTmrHWcRm4DAfjjk8rfwLEtPAeoH0qEh_9Z_MI9RjvDIZfcxaHXP93wJXxLPMy7mT1nlaHhaMga2blTkqQVOR6TlUDonqU-vRUeJjkvBqIpJUQQLip9sl-GZvdIG1uGkwihHykmxyZvRLaesmcQsOqoQx1lORfj0rLuKC4VkiZHcNcf_N2FnmNrUn_PwJLIDQNajchm4KS3ubVRRy1_qTkiTUNBKQJ1gTrrGRMPZ8Fb4qgr-9dQyKEElIM6HzPRdYHfWSU-20J3QeN_EngqfPLesiDwDFZ-uXEvb4eF58h29jkmWnfJ4VsHM3NUT1IhtiF_yGP4fDXhQaYKEOCiEMegCPIRAl8fUoTrkIv6aqoCHS41j8RhO3Kcxlq4Q_iNxGb-KvwWHmtaGFKdVxl4BU1bDBf50O_3j0A1UFkwlrIhUYWPAl2CBRmX4IVzIG_n-c2iemtdamGoOOIcMBStdlow,
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