// export function addnewuser(data = {}) {
//     // Default options are marked with *
//       return fetch('http://localhost:8080/api/newuser', {
//           method: "POST", 
//           mode: "no-cors", // no-cors, cors, *same-origin
//           cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//           credentials: "same-origin", 
//           headers: {
//               "Content-Type": "application/json",
//           },
//           redirect: "follow", // manual, *follow, error
//           referrer: "no-referrer", // no-referrer, *client
//           body: JSON.stringify(data),
//       })
//       .then(response => response.json()); 
//   }

export function addnewuser(data = {}) {
    // Default options are marked with *
      return fetch('http://localhost:8080/api/newuser', {
          method: "POST", 
          mode: "no-cors", // no-cors, cors, *same-origin
          headers: {
            // 'Accept': 'application/json',
            // "Content-Type": "application/json"
            "Content-Type": "application/x-www-form-urlencoded"
          },
          redirect: "follow", // manual, *follow, error
          body: JSON.stringify(data),
      })

  }

