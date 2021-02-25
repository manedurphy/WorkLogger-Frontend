import React from 'react';
import Row from './Row';
import TableBody from '@material-ui/core/TableBody';
import { TasksTableProps } from '../../types';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../../../redux/slices/tasks/tasksSlice';

const TaskInfo: React.FC<TasksTableProps> = ({ tasks, Actions }): JSX.Element => {
    const { search } = useSelector(getTasksState);
    return (
        <TableBody className={'action-cell'}>
            {tasks.map((task) => task.name.indexOf(search) == 0 && <Row key={task.id} task={task} Actions={Actions} />)}
        </TableBody>
    );
};

export default TaskInfo;
