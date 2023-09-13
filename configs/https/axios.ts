import axios from 'axios'
import { BASE_URL } from '@/configs/constants/urlConstant'

export const apiClient = () => {
    const axiosHttp = axios.create({
        baseURL: BASE_URL,
    })

    axiosHttp.interceptors.request.use(
        async function intercept(config) {
            const interceptedConfig = config
            return interceptedConfig
        },
        function interceptError(error) {
            return Promise.reject(error)
        }
    )

    axiosHttp.interceptors.response.use(function intercept(response) {
        return response
    })

    return axiosHttp
}
