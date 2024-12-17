import axios from "axios"

// let API_URL = "https://api.avtostories.ru/api/v1/"
let API_URL = "http://localhost:5000/api/"

const $api = axios.create({
	baseURL: API_URL,
})

$api.interceptors.request.use((config: any) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
	return config
})

export { API_URL }
export default $api
