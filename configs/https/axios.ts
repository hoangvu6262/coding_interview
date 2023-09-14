import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { BASE_URL } from '@/configs/constants/urlConstant'

declare module 'axios' {
    interface AxiosRequestConfig {
        cancelPreviousRequests?: boolean
    }
}

export const apiClient = () => {
    const axiosHttp = axios.create({
        baseURL: BASE_URL,
    })

    const pendingRequests: { [key: string]: AbortController } = {}
    const removePendingRequest = (
        url: string | undefined,
        abort = false
    ): void => {
        // check if pendingRequests contains our request URL
        if (url && pendingRequests[url]) {
            // if we want to abort ongoing call, abort it
            if (abort) {
                pendingRequests[url].abort()
            }
            // remove the request URL from pending requests
            delete pendingRequests[url]
        }
    }

    axiosHttp.interceptors.request.use(
        async (config: InternalAxiosRequestConfig) => {
            const interceptedConfig = config
            if (
                interceptedConfig?.cancelPreviousRequests &&
                interceptedConfig?.url &&
                !interceptedConfig.signal
            ) {
                // remove request URL from pending requests and also abort ongoing call with same URL
                removePendingRequest(config.url, true)

                const abortController = new AbortController() //create new AbortController
                interceptedConfig.signal = abortController.signal // assign it's signal into request config
                pendingRequests[interceptedConfig.url] = abortController // store AbortController in the pending requests map
            }
            return interceptedConfig
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    axiosHttp.interceptors.response.use((response: AxiosResponse) => {
        removePendingRequest(response.request.responseURL)
        return response
    })

    return axiosHttp
}
