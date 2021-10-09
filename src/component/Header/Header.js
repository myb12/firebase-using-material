import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import useStyles from './HeaderStyle';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const { user, logout } = useAuth();
    console.log('from header', user);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link className={classes.navLink} to="/home">Home</Link>
                        <Link className={classes.navLink} to="/profile">Profile</Link>
                        <Link className={classes.navLink} to="/shipping">Shipping</Link>
                        <Link className={classes.navLink} to="/login">Login</Link>
                        <Link className={classes.navLink} to="/register">Register</Link>

                    </Typography>
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <img style={{ width: 30, borderRadius: 50 }} src={user.photoURL} alt="" />

                        </IconButton>
                        <Menu
                            style={{ marginTop: 50 }}
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontSize: 16, marginLeft: 10, }}>{user.displayName}</span> <br />
                                {
                                    user.email && <Button onClick={logout} variant="contained" color="error">log out</Button>
                                }
                            </MenuItem>
                            <MenuItem onClick={handleClose}>{user.displaName}</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;