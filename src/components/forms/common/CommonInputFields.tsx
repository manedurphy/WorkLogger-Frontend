import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { CommonInputFieldsProps } from '../types';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../../redux/types';

const TaskInputFields: React.FC<CommonInputFieldsProps> = ({ formData, children, handleChange }): JSX.Element => {
    const state = useSelector((state: IGlobalState) => state);
    const { tasks, log } = state;
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
                    inputProps={{ 'aria-label': 'name' }}
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
                    disabled={tasks.edit || log.showLogForm}
                    type={'number'}
                    id={'projectNumber'}
                    label={'Project Number'}
                    inputProps={{ 'aria-label': 'projectNumber' }}
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
                    inputProps={{ step: 0.01, 'aria-label': 'hoursAvailableToWork' }}
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
                    inputProps={{ step: 0.01, 'aria-label': 'hoursWorked' }}
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
                    inputProps={{ step: 0.01, 'aria-label': 'reviewHours' }}
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
                    inputProps={{ step: 0.01, 'aria-label': 'hoursRequiredByBim' }}
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
                    inputProps={{ 'aria-label': 'numberOfReviews' }}
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
                    inputProps={{ 'aria-label': 'notes' }}
                    label={'Notes or Comments'}
                    name={'notes'}
                    value={formData.notes}
                    onChange={handleChange}
                />
            </Grid>
            {children}
        </Grid>
    );
};

export default TaskInputFields;
