import { API_DOMAIN } from '@/configs/constants/urlConstant'
import { apiClient } from '@/configs/https/axios'
import { COMMON_LIMIT } from '@/configs/constants/productConstant'
import { GenericAbortSignal } from 'axios'

const productActions = {
    getProducts: async (skip: number, abort: boolean) => {
        const response = await apiClient().get(`${API_DOMAIN.PRODUCT}`, {
            params: { limit: COMMON_LIMIT, skip },
            cancelPreviousRequests: abort,
        })
        return response?.data
    },
    searchProducts: async (search: string, skip: number, abort: boolean) => {
        const response = await apiClient().get(`${API_DOMAIN.PRODUCT}/search`, {
            params: { q: search, limit: COMMON_LIMIT, skip },
            cancelPreviousRequests: abort,
        })
        return response?.data
    },
}

export default productActions
