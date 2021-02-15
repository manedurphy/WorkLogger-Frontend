import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import { TaskInputFieldsProps } from '../types';

const TaskInputFields: React.FC<TaskInputFieldsProps> = ({ formData, handleChange }): JSX.Element => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                    name={'name'}
                    variant={'outlined'}
                    required
                    fullWidth
                    id={'name'}
                    label={'Task Name'}
                    autoFocus
                    value={formData.name}
                    onChange={handleChange}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    variant={'outlined'}
                    fullWidth
                    required
                    type={'number'}
                    id={'projectNumber'}
                    label={'Project Number'}
                    name={'projectNumber'}
                    value={formData.projectNumber}
                    onChange={handleChange}
                />
            </Grid>

            <Grid item xs={12} md={4}>
                <TextField
                    variant={'outlined'}
                    required
                    fullWidth
                    type={'number'}
                    inputProps={{ step: 0.01 }}
                    id={'hoursAvailableToWork'}
                    label={'Hours Available to Work'}
                    name={'hoursAvailableToWork'}
                    value={formData.hoursAvailableToWork}
                    onChange={handleChange}
                />
            </Grid>

            <Grid item xs={12} md={4}>
                <TextField
                    variant={'outlined'}
                    required
                    fullWidth
                    type={'number'}
                    inputProps={{ step: 0.01 }}
                    id={'hoursWorked'}
                    label={'Hours Worked'}
                    name={'hoursWorked'}
                    value={formData.hoursWorked}
                    onChange={handleChange}
                />
            </Grid>

            <Grid item xs={12} md={4}>
                <TextField
                    variant={'outlined'}
                    required
                    fullWidth
                    type={'number'}
                    inputProps={{ step: 0.01 }}
                    id={'reviewHours'}
                    label={'Hours Spent on Review'}
                    name={'reviewHours'}
                    value={formData.reviewHours}
                    onChange={handleChange}
                />
            </Grid>

            <Grid item xs={12} md={4}>
                <TextField
                    variant={'outlined'}
                    required
                    fullWidth
                    type={'number'}
                    inputProps={{ step: 0.01 }}
                    id={'hoursRequiredByBim'}
                    label={'Hours Required By BIM'}
                    name={'hoursRequiredByBim'}
                    value={formData.hoursRequiredByBim}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField
                    variant={'outlined'}
                    required
                    fullWidth
                    type={'number'}
                    id={'numberOfReviews'}
                    label={'Number of Reviews'}
                    name={'numberOfReviews'}
                    value={formData.numberOfReviews}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField
                    variant={'outlined'}
                    fullWidth
                    id={'notes'}
                    label={'Notes or Comments'}
                    name={'notes'}
                    value={formData.notes}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    type={'date'}
                    label={'Date assgined'}
                    name={'dateAssigned'}
                    required
                    onChange={handleChange}
                    value={formData.dateAssigned}
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
                    value={formData.dueDate}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default TaskInputFields;
