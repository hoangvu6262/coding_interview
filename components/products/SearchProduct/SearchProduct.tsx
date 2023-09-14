import { ChangeEvent } from 'react'
import { Box, OutlinedInput, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

type SearchProductProps = {
    handleChane: (value: string) => void
}

const SearchProduct = ({ handleChane }: SearchProductProps) => {
    const handleChangeInput = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        handleChane(e.target.value)
    }

    return (
        <Box>
            <OutlinedInput
                autoComplete="off"
                id="custom-iput"
                size="small"
                placeholder="Search Products"
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
                onChange={handleChangeInput}
            />
        </Box>
    )
}

export default SearchProduct
