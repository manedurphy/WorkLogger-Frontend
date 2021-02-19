import React, { useState, ChangeEvent, FormEvent } from 'react';
import useModalStyles from './styles';
import AddHoursButton from './buttons/AddHours';
import CancelButton from './buttons/Cancel';
import { Box, Fade, Input, Modal } from '@material-ui/core';
import { getModalState } from '../../redux/slices/modals/modalsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddHours } from '../../redux/slices/tasks/tasksSlice';

const AddHoursModal = (): JSX.Element => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({ hours: 0 });
    const { modal, paper, headerStyle, addHoursBtnContainer } = useModalStyles();
    const { addHours } = useSelector(getModalState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(handleAddHours(addHours.id, formData));
    };

    return (
        <Modal open={addHours.show} className={modal}>
            <Fade in={addHours.show}>
                <div className={paper}>
                    <h2 className={headerStyle}>How many hours did you work today?</h2>
                    <form onSubmit={handleSubmit}>
                        <Input
                            type={'number'}
                            name={'hours'}
                            fullWidth={true}
                            inputProps={{ step: 0.01 }}
                            value={formData.hours}
                            onChange={handleChange}
                        />
                        <Box className={addHoursBtnContainer}>
                            <AddHoursButton />
                            <CancelButton />
                        </Box>
                    </form>
                </div>
            </Fade>
        </Modal>
    );
};

export default AddHoursModal;
