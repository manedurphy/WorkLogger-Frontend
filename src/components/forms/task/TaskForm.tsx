import React, { FormEvent, ChangeEvent, useState } from 'react';
import Title from '../../main/components/Title';
import CloseIcon from '@material-ui/icons/Close';
import useFormStyles from '../styles';
import { getNewForm } from '../helpers';
import { useDispatch } from 'react-redux';
import { Box, Button, Container, Fade, Grid, Paper, TextField } from '@material-ui/core';
import { handleSubmitNewTask, setShowCreateNewTaskForm } from '../../../redux/slices/tasks/tasksSlice';

const TaskForm = () => {
    const dispatch = useDispatch();
    const { paper, form, title, submit, close } = useFormStyles();
    const [formData, setFormData] = useState(getNewForm());

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(handleSubmitNewTask(formData));
        setFormData(getNewForm());
    };

    return (
        <Fade in={true} timeout={500} enter>
            <Paper className={paper}>
                <form className={form} onSubmit={handleSubmit}>
                    <Box className={title}>
                        <Title>Create New Task</Title>
                        <Box className={close} onClick={() => dispatch(setShowCreateNewTaskForm(false))}>
                            <CloseIcon />
                        </Box>
                    </Box>

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

                    <Container className={submit}>
                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Submit
                        </Button>
                    </Container>
                </form>
            </Paper>
        </Fade>
    );
};

export default TaskForm;
