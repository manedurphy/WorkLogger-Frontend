import React, { useState, ChangeEvent, FormEvent } from 'react';
import useModalStyles from './styles';
import AddHoursButton from './buttons/AddHours';
import CancelButton from './buttons/Cancel';
import ModalContainer from './common/ModalContainer';
import { Box, Input } from '@material-ui/core';
import { getModalState } from '../../redux/slices/modals/modalsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddHours } from '../../redux/slices/tasks/tasksSlice';

const AddHoursModal = (): JSX.Element => {
    const dispatch = useDispatch();
    const header = 'How many hours did you work today?';

    const [formData, setFormData] = useState({ hours: '' });
    const { addHoursBtnContainer } = useModalStyles();
    const { addHours } = useSelector(getModalState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ hours: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(handleAddHours(addHours.id, { ...formData }));
        setFormData({ hours: '' });
    };

    return (
        <ModalContainer header={header} show={addHours.show}>
            <form onSubmit={handleSubmit}>
                <Input
                    type={'number'}
                    fullWidth={true}
                    inputProps={{ step: 0.01 }}
                    value={formData.hours}
                    onChange={handleChange}
                    autoFocus
                    required
                />
                <Box className={addHoursBtnContainer}>
                    <AddHoursButton />
                    <CancelButton />
                </Box>
            </form>
        </ModalContainer>
    );
};

export default AddHoursModal;
