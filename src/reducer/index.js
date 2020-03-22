import Login_red from '../reducer'
import { combineReducers } from 'redux';
import Announce_red from './Announce_red'
export default combineReducers({
    login:Login_red,
    announce:Announce_red
})