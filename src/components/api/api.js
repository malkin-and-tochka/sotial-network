import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
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
    }
}