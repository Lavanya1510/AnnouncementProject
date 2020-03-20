import { DISPLAY_LOGIN, LOADING_LOGIN} from '../action/types'

const initialState = {
    alllogindata: [], loadinglogin:true
}


export default function async(state=initialState, action){
    switch(action.type){
        case DISPLAY_COLLECTIONS : 
        console.log('in reducer')
            return  { alllogindata:action.payload, loadinglogin:false } 
        case LOADING_COLLECTIONS:
                return {...state, loadinglogin:true}     
        default : 
            return {...state}
    }
}