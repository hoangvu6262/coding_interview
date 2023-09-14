export const BASE_URL =
    process.env.NODE_ENV !== 'production'
        ? process.env.NEXT_PUBLIC_API_URL
        : 'https://dummyjson.com'

export const API_DOMAIN = {
    PRODUCT: `${BASE_URL}/products`,
}
