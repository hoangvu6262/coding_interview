import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import NavLink from 'next/link'
import './styles.scss'

type NavItem = {
    id: number
    name: string
}

const navItems: NavItem[] = [
    {
        id: 1,
        name: 'Products',
    },
]

const Header = () => {
    return (
        <AppBar component="nav" className="main-header">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    LOGO
                </Typography>
                <NavLink href={'/products'}>
                    {navItems.map((item) => (
                        <Button key={item.id} sx={{ color: '#fff' }}>
                            {item.name}
                        </Button>
                    ))}
                </NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default Header
