import React from 'react';
import Row from './Row';
import { TableBody } from '@material-ui/core';
import { TasksTableProps } from '../types';

const TaskInfo: React.FC<TasksTableProps> = ({ tasks, Dropdown }): JSX.Element => {
    return (
        <TableBody className={'action-cell'}>
            {tasks.map((task) => (
                <Row key={task.id} task={task} Dropdown={Dropdown} />
            ))}
        </TableBody>
    );
};

export default TaskInfo;
