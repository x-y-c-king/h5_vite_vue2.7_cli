import axios from "axios";

axios.interceptors.request.use((config) => {
    return config
})

axios.interceptors.response.use((res) => {
    return res
})

const get = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: data }).then(res => {
            resolve(res)
        }).then(e => {
            reject(e)
        })
    })
}

const post = (url, data = {}, config = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data, config).then(res => {
            resolve(res)
        }).then(e => {
            reject(e)
        })
    })
}

export {
    get,
    post
}