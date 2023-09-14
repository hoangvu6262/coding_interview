import { CircularProgress, Box, Grid } from '@mui/material'

type LoadingProps = {}

const Loading = (props: LoadingProps) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
                padding: '30px 0px',
            }}
        >
            <CircularProgress color="inherit" />
        </Grid>
    )
}

export default Loading
