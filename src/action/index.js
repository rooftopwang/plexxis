import { addnewuser,  deleteById } from '../api/index.js'

export const NEW_USER = 'NEW_USER'
export const DELETE_USER = 'DELETE_USER'
export const LOAD_USER = 'LOAD_USER'

export const newuser = (user)=>{
    return (dispatch) => {
        addnewuser(user).then((res)=>{
            console.log(res)
            dispatch(handleInitData())
        })
    }
}

export const deleteuser = (id)=>{
    return (dispatch) => {
        deleteById(id).then((res) => {
            console.log(res);
            dispatch(handleInitData())
        })
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