import { DISPLAY_ANNOUNCE, LOADING_ANNOUNCE } from './types'
import {message } from  'antd'

export const addData = ({obj,showevent})=> async dispatch =>{
    // let dataarr=[]
    // dataarr.push(obj)
    console.log('inside action of adddata',obj)
    message.success(showevent+'added successfully')
    dispatch({type:LOADING_ANNOUNCE}) 
    dispatch({
            type:DISPLAY_ANNOUNCE,
            payload: obj
    })
   
}
export const addComment = ({commentvalue,index,datum})=> async dispatch =>{
    // let dataarr=[]
    // dataarr.push(obj)
    console.log('inside action of addComment',commentvalue,index,datum)
    let data=datum
    console.log('data before set',data)
    if(data[index]['comments']){
        console.log('comment is not empty')
        data[index]['comments'].push(commentvalue)
    }else{
        console.log('comment is empty')
        data[index]['comments']=[]
        data[index]['comments'].push(commentvalue)

    }
    let obj=data[index]
    console.log('final obj',obj)
    dispatch({type:LOADING_ANNOUNCE}) 
    dispatch({
            type:DISPLAY_ANNOUNCE,
            payload: obj
    })
    return true
   
}

export const searchData = ({obj})=> async dispatch =>{
    // let dataarr=[]
    // dataarr.push(obj)
    console.log('inside action of search action',obj)
    dispatch({type:LOADING_ANNOUNCE}) 
    dispatch({
            type:DISPLAY_ANNOUNCE,
            payload: obj
    })
    return true
   
}