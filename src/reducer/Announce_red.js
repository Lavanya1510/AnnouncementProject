import { LOADING_ANNOUNCE, DISPLAY_ANNOUNCE } from '../action/types'
const initState = {
     loadingAnnounce:true,alldata:[]
}
export default function async(state=initState, action) {
    switch(action.type){
        case DISPLAY_ANNOUNCE : 
            const index = state.alldata.findIndex(post => post.id === action.payload.id)
            state.alldata.slice(0, index)
            let resdata

            // if(action.payload.is_search === false){
                if(index === -1){
                    resdata=state.alldata.concat(action.payload)
                }else{
                    resdata=state.alldata
                }
            // }
            // else{
            //     console.log('if not object')
            //     let arr=[]
            //     resdata=arr.concat(action.payload)
            // }
            console.log('resss',resdata)
            return  {...state, alldata:resdata, loadingAnnounce:false } 
            // return  {...state, alldata:index === -1 ?state.alldata.concat(action.payload):state.alldata, loadingAnnounce:false } 
            // return  {...state, alldata:index == -1 ? state.alldata.concat(action.payload):state.alldata.concat(action.payload),
            //      loadingAnnounce:false } 
            // return [...state.alldata.slice(0, index),{
            //     ...state.alldata[index],
            //     alldata:state.alldata.concat(action.payload), loadingAnnounce:false
            // }]
        case LOADING_ANNOUNCE:
                return {...state, loadingAnnounce:true}     
        default : 
            return {...state}
    }
}