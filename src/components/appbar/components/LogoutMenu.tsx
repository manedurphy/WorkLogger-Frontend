import React, { useState } from 'react';
import { Menu, MenuItem, Fade, IconButton, Badge } from '@material-ui/core';
import { ExitToApp as ExitToAppIcon } from '@material-ui/icons';

const NotificationsMenu = (): JSX.Element => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.pathname = '/login';
    };

    return (
        <div>
            <IconButton color={'inherit'} data-testid={'logout-btn'} onClick={handleClick}>
                <Badge color={'secondary'}>
                    <ExitToAppIcon />
                </Badge>
            </IconButton>
            <Menu
                id={'fade-menu'}
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                <MenuItem onClick={handleClose}>Close</MenuItem>
            </Menu>
        </div>
    );
};

export default NotificationsMenu;
