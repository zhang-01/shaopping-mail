import axios from "axios"

export function request(config) {
    let axiosl = axios.create({
        baseURL:"http://127.0.0.1:3000",
        timeout:5000
    })
    return axiosl(config)
}