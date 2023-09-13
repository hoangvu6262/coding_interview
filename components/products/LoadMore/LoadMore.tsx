import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Container } from '@mui/material'

import Loading from '@/components/shared/Loading/Loading'

type Props = {
    handleLoadMore: (inView: boolean) => void
    loadMore: boolean
}

const LoadMore = ({ handleLoadMore, loadMore }: Props) => {
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView && loadMore) {
            setTimeout(() => handleLoadMore(inView), 1000)
        }
    }, [inView, loadMore])

    return (
        <Container maxWidth="lg" ref={ref}>
            {inView && loadMore ? <Loading /> : null}
        </Container>
    )
}

export default LoadMore
