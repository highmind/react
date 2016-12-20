import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/reducers'

var store = compose(applyMiddleware(thunk))(createStore)


export default store

