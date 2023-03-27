import {usersAPI, profileAPI} from "../components/api/api"

const Add_Post = 'profile/Add_Post'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const Update_New_Post_Text = 'profile/Update_New_Post_Text'
const SAVE_PHOTO_SUCCES = 'profile/SAVE_PHOTO_SUCCES'

let initialState = {
    postsData: [
        {id: 1, post: 'hi', name: 'Sasha'},
        {id: 2, post: 'how are you', name: 'Lena'},
        {id: 3, post: 'im fine', name: 'Ignat'},
        {id: 4, post: '4 post', name: 'Dima'},
        {id: 5, post: '5 post', name: 'Kostya'},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_Post:
            return {
                ...state,
                postsData: [...state.postsData, {id: 5, post: action.newPostText, name: 'test name'}],
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(it => it.id !== action.postId)
            }
        case SAVE_PHOTO_SUCCES:
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}
            }
        default:
            return state
    }
}

export const addPost = (newPostText) => ({type: Add_Post, newPostText})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const updateNewPostText = (text) => ({type: Update_New_Post_Text, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSacces = (photo) => ({type: SAVE_PHOTO_SUCCES, photo})

export const getUsersData = (userId) => {
    return async (dispatch) => {
        let data = await usersAPI.getUserData(userId)
        dispatch(setUserProfile(data))
    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0)
            dispatch(setStatus(status))
    }
}
export const saveAvatarPhoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.saveAvatarPhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSacces(response.data.data.photos))
        }
    }
}
export const saveProfile = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().authDataWrapper.userId
        const response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
            dispatch(getUsersData(userId))
        }
    }
}


export default profileReducer