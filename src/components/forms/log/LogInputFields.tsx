import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { LogInputFieldsProps } from '../types';

const LogInputFields: React.FC<LogInputFieldsProps> = ({ handleChange, loggedAt }): JSX.Element => (
    <Grid item xs={12}>
        <TextField
            type={'date'}
            label={'Logged at'}
            name={'loggedAt'}
            required
            onChange={handleChange}
            value={loggedAt}
            InputLabelProps={{
                shrink: true,
            }}
        />
    </Grid>
);

export default LogInputFields;
