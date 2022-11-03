import React from 'react';
import {NavLink} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

function Navbar(props) {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
                display="flex"
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters variant="dense" sx={{ justifyContent: 'space-between' }}>
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                mr: 2,
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
                        </Box>
                        <Box display='flex'>
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
                            <div>
                                <NavLink
                                    to='/user'
                                    exact
                                >
                                    <Avatar
                                        sx={{ width: 40, height: 40 }}
                                        alt='megan profile'
                                        src='https://ca.slack-edge.com/T02MD9XTF-U03P4PKABKP-cde59640f6a8-512'
                                    />
                                </NavLink>
                            </div>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Navbar;