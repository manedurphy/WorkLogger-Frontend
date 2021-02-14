import React from 'react';
import Row from './Row';
import { TableBody } from '@material-ui/core';
import { TasksTableProps } from '../../types';

const TaskInfo: React.FC<TasksTableProps> = ({ tasks, Actions }): JSX.Element => {
    return (
        <TableBody className={'action-cell'}>
            {tasks.map((task) => (
                <Row key={task.id} task={task} Actions={Actions} />
            ))}
        </TableBody>
    );
};

export default TaskInfo;
