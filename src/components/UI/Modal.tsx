/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, createStyles, Fade, makeStyles, Modal, Theme } from '@material-ui/core';
import { handleCompleteTask, handleDeleteTask } from '../../redux/slices/tasks/tasksSlice';
import { getModalState, setShowModal } from '../../redux/slices/modals/modalsSlice';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #000',
            borderRadius: '1rem',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            outline: 'none',
        },
        header: {
            marginBottom: '8px',
        },
    }),
);
const ConfirmModal = (): JSX.Element => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { id, show, header, command } = useSelector(getModalState);
    return (
        <Modal open={show} className={classes.modal}>
            <Fade in={show}>
                <div className={classes.paper}>
                    <h2 className={classes.header}>{header}</h2>
                    <Box display={'flex'}>
                        <Box flexGrow={1}>
                            <Button
                                variant={'contained'}
                                color={command === 'delete' ? 'secondary' : 'primary'}
                                onClick={() => {
                                    if (command === 'delete') {
                                        dispatch(handleDeleteTask(id));
                                    } else {
                                        dispatch(handleCompleteTask(id));
                                    }
                                }}
                            >
                                Yes, {command}
                            </Button>
                        </Box>
                        <Button variant={'contained'} onClick={() => dispatch(setShowModal(false))}>
                            Cancel
                        </Button>
                    </Box>
                </div>
            </Fade>
        </Modal>
    );
};

export default ConfirmModal;
