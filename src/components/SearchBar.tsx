import React from 'react';
import { Search as SearchIcon } from '@material-ui/icons';
import { fade, InputBase, makeStyles } from '@material-ui/core';
// import { GlobalContext } from '../context/GlobalState';
// import { Tasks } from '../enums';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: 30,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up(768)]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const SearchBar = (): JSX.Element => {
    const classes = useStyles();
    // const { state, dispatch } = useContext(GlobalContext);

    // const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    //     dispatch({
    //         type: Tasks.setDisplayTasks,
    //         payload: state.tasks.currentTasks.filter((task) => task.name.indexOf(e.target.value) !== -1),
    //     });
    // };

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
                // onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
