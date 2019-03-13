import {NEW_USER, DELETE_USER, LOAD_USER} from '../action/index.js';


export default function(state = [], action) {
    switch (action.type){
        case NEW_USER: 
        return [
            ...state, 
            action.newuser
        ];

        case DELETE_USER: 
        return state.filter((user)=>{
            return user.id !== action.user.id; 
        });

        case LOAD_USER: 
        return action.users;

        default: 
        return state;
    }
}
