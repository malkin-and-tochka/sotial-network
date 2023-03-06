import { compose, applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import dialogsReducer from './dialogs-reduce'
import profileReducer from './profile-reduce'
import usersReducer from './users-reducer'
import authReducer from './auth-reduce'
import ThunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  dialogsDatawrapper: dialogsReducer,
  ProfileDataWrapper: profileReducer,
  usersDataWrapper: usersReducer,
  authDataWrapper: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(ThunkMiddleware)))

// let store = createStore(reducers, applyMiddleware(ThunkMiddleware))

export default store