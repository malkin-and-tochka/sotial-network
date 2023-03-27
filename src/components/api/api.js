import axios from "axios";
import {saveAvatarPhoto} from "../../redux/profile-reduce";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "399fd73d-9262-4d54-9988-2fbc79002b93"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return (
            instance.get(`/users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },
    getUserData(userId) {
        return (
            instance.get(`/profile/` + userId)
                .then(response => response.data)
        )
    },
    follow(userId) {
        return (
            instance.post(`/follow/${userId}`).then(
                response => response.data
            )
        )
    },
    unfollow(userId) {
        return (
            instance.delete(`/follow/${userId}`).then(
                response => response.data.data
            )
        )
    }
}

export const authAPI = {
    authMe() {
        return (
            instance.get(`/auth/me`)
                .then(response => response.data)
        )
    },
    login(email, password, rememberMe = false) {
        return (
            instance.post(`/auth/login`, {email, password, rememberMe})
        )
    },
    logout() {
        return (
            instance.delete(`/auth/login`)
        )
    }
}
export const profileAPI = {
    getStatus(userId) {
        return (
            instance.get(`profile/status/` + userId)
        )
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    saveAvatarPhoto(file){
        debugger
        const formData = new FormData()
        formData.append("image", file)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile){
        return instance.put(`profile`, profile)
    }
}