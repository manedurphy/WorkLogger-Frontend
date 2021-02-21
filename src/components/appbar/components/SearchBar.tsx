import React, { ChangeEvent } from 'react';
import useAppBarStyles from '../appbarStyles';
import { Search as SearchIcon } from '@material-ui/icons';
import { InputBase } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { searchTask } from '../../../redux/slices/tasks/tasksSlice';

const SearchBar = (): JSX.Element => {
    const dispatch = useDispatch();
    const { search, searchIcon, inputRoot, inputInput } = useAppBarStyles();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(searchTask(e.target.value));
    };

    return (
        <div className={search}>
            <div className={searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                inputProps={{ 'aria-label': 'search' }}
                placeholder={'Search...'}
                classes={{ root: inputRoot, input: inputInput }}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
