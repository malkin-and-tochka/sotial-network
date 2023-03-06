import {authAPI} from "../components/api/api"

const SET_USER_DATA = 'auth/SET_USER_DATA'
const INITIALIZED_SUCCESS = 'auth/INITIALIZED_SUCCESS'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    initialized: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userId: action.userId,
                login: action.login,
                email: action.email,
                isAuth: action.isAuth,
            }
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, userId, email, login, isAuth})

export const initializeApp = () =>
    async (dispatch) => {
        let promise = dispatch(authMe())
        Promise.all([promise]).then(() => {
                dispatch(initializedSuccess())
            }
        )

    }

export const authMe = () => {
    return async (dispatch) => {
        const data = await authAPI.authMe()
        if (data.resultCode === 0) {
            let id = data.data.id
            let login = data.data.login
            let email = data.data.email
            dispatch(setAuthUserData(id, email, login, true))
        } else {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}
export const login = (email, password, rememberMe, setStatus) => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe)
        if (data.data.resultCode === 0) {
            dispatch(authMe(email, password, rememberMe, true))
        } else {
            setStatus(data.data.messages)
        }
    }
}
export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logout()
        if (data.data.resultCode === 0) {
            dispatch(authMe(null, null, null, false))
        }
    }
}

export default authReducer