import {usersAPI} from "../components/api/api"

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = '/users/UNFOLLOW'
const SET_USERS = '/users/SET_USERS'
const SET_CURRENT_PAGE = '/users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNTER = '/users/SET_TOTAL_USERS_COUNTER'
const TOOGLE_IS_FETCHING = '/users/TOOGLE_IS_FETCHING'
const TOOGLE_FOLLOWING_IN_PROGRESS = '/users/TOOGLE_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCounter: 100,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userId === u.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userId === u.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNTER:
            return {...state, totalUsersCounter: action.count}
        case TOOGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOOGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:

    }
    return state
}

export const follow = (userId) => ({type: FOLLOW, userId: userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const setCurrentPage = (cP) => ({type: SET_CURRENT_PAGE, currentPage: cP})
export const setTotalUsersCounter = (totalUsersCounter) => ({type: SET_TOTAL_USERS_COUNTER, count: totalUsersCounter})
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching: isFetching})
export const toogleFollowingInProgress = (isFetching, userId) => ({
    type: TOOGLE_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
})

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toogleIsFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setCurrentPage(currentPage))
        dispatch(toogleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCounter(data.totalCount))
    }
}

export const followThunk = (userId) => {
    return async (dispatch) => {
        dispatch(toogleFollowingInProgress(true, userId))
        let data = await usersAPI.follow(userId)
        if (data.resultCode === 0) {
            dispatch(follow(userId))
        }
        dispatch(toogleFollowingInProgress(false, userId))
    }
}
export const unfollowThunk = (userId) => {
    return async (dispatch) => {
        dispatch(toogleFollowingInProgress(true, userId))
        let data = await usersAPI.unfollow(userId)
        if (data.resultCode !== 0) {
            dispatch(unfollow(userId))
        }
        dispatch(toogleFollowingInProgress(false, userId))
    }
}

export default usersReducer