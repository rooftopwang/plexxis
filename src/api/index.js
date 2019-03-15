
export function addnewuser(data = {}) {
    
      return fetch('http://localhost:8080/api/newuser', {
          method: "POST", 
          mode: "cors", 
          headers: {
            // 'Accept': 'application/json',
            // "Content-Type": "application/json"
            "Content-Type": "application/x-www-form-urlencoded"
          },
          redirect: "follow", // manual, follow, error
          body: JSON.stringify(data),
      })

  }

  // export function deleteById(userid) {
  //     const url = 'http://localhost:8080/api/delete/' + userid; 
  //     console.log(url)
  //     return fetch(url, {
  //         method: "DELETE", 
  //         mode: "cors", 
  //         headers: {
  //           // "Content-Type": "application/json"
  //           "Content-Type": "application/x-www-form-urlencoded"
  //         },
  //         redirect: "follow", // manual, *follow, error
  //         body: JSON.stringify({id: userid}),
  //     })

  // }

  export function deleteById(userid) {
    const url = 'http://localhost:8080/api/delete/' + userid; 
    return fetch(url, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: 'userid'})
    })

}


