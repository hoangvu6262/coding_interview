import { API_DOMAIN } from '@/configs/constants/urlConstant'
import { apiClient } from '@/configs/https/axios'
import { COMMON_LIMIT } from '@/configs/constants/productConstant'

const productActions = {
    getProducts: async (skip: number) => {
        const response = await apiClient().get(`${API_DOMAIN.PRODUCT}`, {
            params: { limit: COMMON_LIMIT, skip },
        })
        return response?.data
    },
    searchProducts: async (search: string, skip: number) => {
        const response = await apiClient().get(`${API_DOMAIN.PRODUCT}/search`, {
            params: { q: search, limit: COMMON_LIMIT, skip },
        })
        return response?.data
    },
}

export default productActions
