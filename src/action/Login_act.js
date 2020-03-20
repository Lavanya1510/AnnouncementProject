import { DISPLAY_LOGIN, LOADING_LOGIN } from './types'
export const viewCollections = ({token})=> async dispatch =>{
    dispatch({type:DISPLAY_LOGIN}) 
    console.log('in login action')
    let a=[{aa:'aa',bb:'bb'}]
    dispatch({
                    type:DISPLAY_LOGIN,
                    payload: a
            })
   
}