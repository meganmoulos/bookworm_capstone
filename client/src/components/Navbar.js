import React from 'react';
import {NavLink} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

function Navbar(props) {
    return (
        <div>
           
                <AppBar
                    position="static"
                    color="default"
                    elevation={0}
                    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
                >
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontWeight: 700,
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    }}
                                >
                                    <div>
                                        <NavLink
                                            to='/home'
                                            exact
                                        >
                                            <p>BOOKWORM</p>
                                        </NavLink>
                                    </div>
                                </Typography>
                                <NavLink
                                    to='/shelves'
                                    exact
                                >
                                    <p>My Shelves</p>
                                </NavLink>
                                <NavLink
                                    to='/cart'
                                    exact
                                >
                                    <p>Shopping Cart</p>
                                </NavLink>
                            </Box>
                            <Box sx={{ flexGrow: 0 }}>
                                <div>
                                    <Avatar
                                        sx={{ width: 40, height: 40 }}
                                        alt='megan profile'
                                        src='https://ca.slack-edge.com/T02MD9XTF-U03P4PKABKP-cde59640f6a8-512'
                                    />
                                    <NavLink
                                        to='/user'
                                        exact
                                    >
                                        <p>User</p>
                                    </NavLink>
                                </div>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            
        </div>
    );
}

export default Navbar;