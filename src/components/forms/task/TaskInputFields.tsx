import { Grid, TextField } from '@material-ui/core';
import React, { Fragment } from 'react';

const TaskInputFields: React.FC<any> = ({ handleChange, dateAssigned, dueDate }): JSX.Element => (
    <Fragment>
        <Grid item xs={12}>
            <TextField
                type={'date'}
                label={'Date assgined'}
                name={'dateAssigned'}
                required
                onChange={handleChange}
                value={dateAssigned}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                type={'date'}
                label={'Due date'}
                name={'dueDate'}
                required
                onChange={handleChange}
                value={dueDate}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Grid>
    </Fragment>
);

export default TaskInputFields;
