import React from 'react';
import clsx from 'clsx';
import useButtonStyles from './buttonStyles';
import { LibraryBooks } from '@material-ui/icons';

const Log = () => {
    const { log, button } = useButtonStyles();
    return (
        <div className={clsx(log, button)} /* onClick={(e) => handleAction(e, props.row.projectNumber, Commands.LOG)}*/>
            <span>See Log</span>
            <LibraryBooks />
        </div>
    );
};

export default Log;
