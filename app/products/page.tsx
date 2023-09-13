'use client'

import { useEffect, useState } from 'react'
import { Grid, Container, Typography } from '@mui/material'

import { Product } from '@/configs/types/types'
import { useDebounce } from '@/hooks/useDebounce'
import productActions from '@/actions/productAction'
import CardProduct from '@/components/products/CardProduct/CardProduct'
import LoadMore from '@/components/products/LoadMore/LoadMore'
import Loading from '@/components/shared/Loading/Loading'
import SearchProduct from '@/components/products/SearchProduct/SearchProduct'

type ProductProps = {}

type ProductDataType = {
    total: number
    products: Product[]
    loading: boolean
    search: string
}

const ProductsPage = (props: ProductProps) => {
    const [productData, setProductData] = useState<ProductDataType>({
        total: 0,
        products: [],
        loading: false,
        search: '',
    })

    const { total, products, loading, search } = productData
    const skip = products.length
    const isLoadMore = skip < total

    const debouncedValue = useDebounce(search)

    useEffect(() => {
        fetchProduct(true)
    }, [debouncedValue])

    const fetchProduct = async (isReset: boolean) => {
        if (isReset) {
            setProductData((prev: ProductDataType) => ({
                ...prev,
                loading: true,
            }))
        }

        const newSkip = isReset ? 0 : skip

        const res = debouncedValue
            ? await productActions.searchProducts(debouncedValue, newSkip)
            : await productActions.getProducts(newSkip)
        setProductData((prev: ProductDataType) => ({
            ...prev,
            total: res.total,
            products: isReset
                ? res.products
                : [...prev.products, ...res.products],
            loading: false,
        }))
    }

    const renderListProduct = () => {
        return (
            !!products.length &&
            products.map((product) => {
                return (
                    <Grid item md={3} key={product.id}>
                        <CardProduct product={product} />
                    </Grid>
                )
            })
        )
    }

    const handleLoadMoreProduct = async (inview: boolean) => {
        fetchProduct(false)
    }

    const handleSearchProduct = async (value: string) => {
        setProductData({
            ...productData,
            search: value,
        })
    }

    return (
        <Container maxWidth="lg" className="products-container">
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    padding: '15px 0px',
                }}
            >
                <Typography gutterBottom variant="h3" component="h2">
                    Products Page
                </Typography>
                <SearchProduct handleChane={handleSearchProduct} />
            </Grid>

            {loading ? (
                <Loading />
            ) : (
                <>
                    <Grid container spacing={3}>
                        {renderListProduct()}
                    </Grid>

                    <LoadMore
                        handleLoadMore={handleLoadMoreProduct}
                        loadMore={isLoadMore}
                    />
                </>
            )}
        </Container>
    )
}

export default ProductsPage
