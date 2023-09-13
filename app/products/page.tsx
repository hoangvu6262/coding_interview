'use client'

import { useEffect, useState } from 'react'
import { Grid, Container } from '@mui/material'

import { Product } from '@/configs/types/types'
import productActions from '@/actions/productAction'
import CardProduct from '@/components/products/CardProduct/CardProduct'
import LoadMore from '@/components/products/LoadMore/LoadMore'
import Loading from '@/components/shared/Loading/Loading'

type ProductProps = {}

type ProductDataType = {
    total: number
    products: Product[]
    loading: boolean
}

const ProductsPage = (props: ProductProps) => {
    const [productData, setProductData] = useState<ProductDataType>({
        total: 0,
        products: [],
        loading: true,
    })

    const { total, products, loading } = productData
    const skip = products.length
    const isLoadMore = skip < total

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        const res = await productActions.getProducts(skip)
        setProductData({
            total: res.total,
            products: [...products, ...res.products],
            loading: false,
        })
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

    const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms))

    const handleLoadMoreProduct = async (inview: boolean) => {
        console.log('handle load more: ', inview, isLoadMore)
        if (inview && isLoadMore) {
            await delay(2000)
            fetchProduct()
        }
    }

    if (loading) {
        return <Loading />
    }

    return (
        <Container maxWidth="lg" className="products-container">
            <h1>Prodcuts Page</h1>

            <Grid container spacing={3}>
                {renderListProduct()}
            </Grid>

            <LoadMore
                handleLoadMore={handleLoadMoreProduct}
                loadMore={isLoadMore}
            />
        </Container>
    )
}

export default ProductsPage
