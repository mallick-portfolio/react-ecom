import {createStore} from 'redux'
import rootReducers from './reducer'


const shopStore = createStore(rootReducers)
export default shopStore