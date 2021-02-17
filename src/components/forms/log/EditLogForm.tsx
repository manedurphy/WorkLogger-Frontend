import React, { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import FormContainer from '../common/FormContainer';
import CommonInputFields from '../common/CommonInputFields';
import FormHeader from '../common/FormHeader';
import UpdateDelete from '../buttons/UpdateDelete';
import LogInputFields from './LogInputFields';
import { getEditLogForm } from '../helpers';
import { getLogState, handleUpdateLogItem, setShowLogForm } from '../../../redux/slices/log/logSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const EditLogForm = (): JSX.Element => {
    const dispatch = useDispatch();
    const { showLogForm, currentLogItem } = useSelector(getLogState);
    const [formData, setFormData] = useState(getEditLogForm(currentLogItem));

    useEffect(() => {
        setFormData(getEditLogForm(currentLogItem));
    }, [currentLogItem]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(handleUpdateLogItem(currentLogItem.id, currentLogItem.TaskId, formData));
    };

    return (
        <FormContainer handleSubmit={handleSubmit} show={showLogForm}>
            <FormHeader header={'Edit Log'} action={setShowLogForm} />
            <CommonInputFields formData={formData} handleChange={handleChange}>
                <LogInputFields handleChange={handleChange} loggedAt={formData.loggedAt} />
            </CommonInputFields>
            <UpdateDelete />
        </FormContainer>
    );
};

export default EditLogForm;
