
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

  export function deleteById(userid = '') {

      return fetch('http://localhost:8080/api/delete/:id', {
          method: "DELETE", 
          mode: "cors", 
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          redirect: "follow", // manual, *follow, error
          body: JSON.stringify({id: userid}),
      })

  }