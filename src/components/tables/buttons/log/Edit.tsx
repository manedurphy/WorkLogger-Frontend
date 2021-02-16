import React from 'react';
import EditButton from '../common/Edit';
import { useDispatch } from 'react-redux';
import { EditLogButtonProps } from '../types';
import { setLogItem } from '../../../../redux/slices/log/logSlice';

const Edit: React.FC<EditLogButtonProps> = ({ logItem }): JSX.Element => {
    const dispatch = useDispatch();
    return <EditButton handleClick={() => dispatch(setLogItem(logItem))} />;
};

export default Edit;
