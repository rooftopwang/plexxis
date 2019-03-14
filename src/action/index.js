import { addnewuser } from '../api/index.js'

export const NEW_USER = 'NEW_USER'
export const DELETE_USER = 'DELETE_USER'
export const LOAD_USER = 'LOAD_USER'

// export const newuser = (newuser)=>{
//     return {
//         type: NEW_USER, 
//         newuser
//     }
// }

export const newuser = (user)=>{
    return (dispatch) => {
        console.log("here: ", user)
        addnewuser(user).then(()=>{
            dispatch(handleInitData())
        })
    }
}

export const deteteuser = (user)=>{
    return {
        type: DELETE_USER, 
        user
    }
}

export const loaduser = (users)=>{
    return {
        type: LOAD_USER, 
        users
    }
}

export const handleInitData = ()=>{
    return (dispatch)=>{
        fetch('http://localhost:8080/api/employees')
        .then(response => response.json())
        .then(employees => {
            dispatch(loaduser(employees))
        })
    }
}