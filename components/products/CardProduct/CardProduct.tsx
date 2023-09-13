import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Product } from '@/configs/types/types'

type ProductsCardProps = {
    product: Product
}

const CardProduct = ({ product }: ProductsCardProps) => {
    const { title, images, price, description } = product
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 150, objectFit: 'contain' }}
                component="img"
                image={images[0]}
                title={title}
            />
            <CardContent sx={{ height: 150, overflowY: 'hidden' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default CardProduct
