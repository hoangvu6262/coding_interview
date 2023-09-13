import { CircularProgress, Box } from '@mui/material'

type LoadingProps = {}

const Load = (props: LoadingProps) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    )
}

export default Load
