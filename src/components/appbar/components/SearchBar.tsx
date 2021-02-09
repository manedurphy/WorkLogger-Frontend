import React from 'react';
import useAppBarStyles from '../appbarStyles';
import { Search as SearchIcon } from '@material-ui/icons';
import { InputBase } from '@material-ui/core';

const SearchBar = (): JSX.Element => {
    const { search, searchIcon, inputRoot, inputInput } = useAppBarStyles();

    return (
        <div className={search}>
            <div className={searchIcon}>
                <SearchIcon />
            </div>
            <InputBase placeholder="Search..." classes={{ root: inputRoot, input: inputInput }} />
        </div>
    );
};

export default SearchBar;
