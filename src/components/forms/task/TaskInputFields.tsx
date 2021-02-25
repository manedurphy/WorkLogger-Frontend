import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { TaskInputFieldProps } from '../types';

const TaskInputFields: React.FC<TaskInputFieldProps> = ({ handleChange, dateAssigned, dueDate }): JSX.Element => (
    <Fragment>
        <Grid item xs={12}>
            <TextField
                type={'date'}
                label={'Date assgined'}
                name={'dateAssigned'}
                inputProps={{ 'aria-label': 'dateAssigned' }}
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
                inputProps={{ 'aria-label': 'dueDate' }}
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
