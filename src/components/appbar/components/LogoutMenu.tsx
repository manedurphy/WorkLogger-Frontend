import React, { useState } from 'react';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../../redux/slices/users/usersSlice';

const NotificationsMenu = (): JSX.Element => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();

    const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    const handleLogOut = () => dispatch(clearUser());

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
