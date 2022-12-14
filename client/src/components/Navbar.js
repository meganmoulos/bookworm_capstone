import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const theme = createTheme({
    palette: {
        primary: {
          main: '#fff',
          black: '#000'
        },
        secondary: {
            main: '#fff9f0'
        }
    }
});

function Navbar({currentUser, setCurrentUser, searchQuery, setSearchQuery}) {
    const history = useHistory()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    function handleClick(e){
        setAnchorEl(e.currentTarget)
    }

    function handleClose(){
        setAnchorEl(null)
    }

    function handleLogout(){
        fetch('/logout', {
            method: "DELETE"
        })
        .then(setCurrentUser(null))
        .then(() => history.push('/login'))
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <ThemeProvider theme={theme}>
                <AppBar
                    position="static"
                    elevation={0}
                    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
                    display="flex"
                    color='secondary'
                >
                    <Container maxWidth="xl">
                        <Toolbar disableGutters variant="dense" sx={{ justifyContent: 'space-between' }}>
                            <Box>
                                <Typography
                                    variant="h6"
                                    theme={theme}
                                    sx={{
                                    mr: 2,
                                    fontWeight: 700,
                                    color: 'black',
                                    textDecoration: 'none'
                                    }}
                                >
                                    <NavLink
                                        to='/home'
                                        exact
                                        style = {{textDecoration: 'none', color: 'black'}}
                                    >
                                        <p>BOOKWORM</p>
                                    </NavLink>
                                </Typography>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                                <TextField 
                                    id="standard-basic"
                                    name="search"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                />
                                <NavLink
                                    to='/cart'
                                    exact
                                    style = {{textDecoration: 'none', color: 'black'}}
                                >
                                    <ListItemIcon sx={{padding: 2}}>
                                        <ShoppingCartIcon fontSize="medium" />
                                    </ListItemIcon>
                                </NavLink>
                                <Box padding={1}>
                                    <Avatar
                                        sx={{ width: 40, height: 40 }}
                                        alt='profile pic'
                                        src={currentUser ? currentUser.image : null}
                                        onClick={handleClick}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    />
                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={open}
                                        onClose={handleClose}
                                        onClick={handleClose}
                                        PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                            },
                                            '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                            },
                                        },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <MenuItem>
                                            My account
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem>
                                            <ListItemIcon>
                                                <Settings fontSize="small" />
                                            </ListItemIcon>
                                            <NavLink
                                                to='/user'
                                                exact
                                            >
                                            Settings
                                            </NavLink>
                                        </MenuItem>
                                        <MenuItem>
                                            <ListItemIcon>
                                                <Logout fontSize="small" />
                                            </ListItemIcon>
                                            <NavLink
                                                to='/logout'
                                                exact
                                                onClick={handleLogout}
                                            >
                                            Logout
                                            </NavLink>
                                        </MenuItem>
                                    </Menu>
                                </Box>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </Box>
    );
}

export default Navbar;