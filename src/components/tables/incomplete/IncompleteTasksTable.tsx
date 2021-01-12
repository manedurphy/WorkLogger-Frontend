import React from 'react';
import IncompleteTaskRow from './IncompleteTaskRow';
import { useSelector } from 'react-redux';
// import { GlobalContext } from '../../context/GlobalState';
import { Table, TableRow, TableCell, TableBody, TableHead } from '@material-ui/core';
import { getTasksState } from '../../../redux/slices/tasks/tasksSlice';

const IncompleteTasksTable = (): JSX.Element => {
    // const [showTaskBody, setShowTaskBody] = useState(false);
    // const tasks = useContext(GlobalContext).state.tasks.displayTasks;
    const { incompletedTasks } = useSelector(getTasksState);

    // useEffect(() => {
    //     tasks.length ? setShowTaskBody(true) : setShowTaskBody(false);
    // }, [tasks]);

    return (
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell />
                    <TableCell>Assigned On</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Project Number</TableCell>
                    <TableCell>Hours Permitted</TableCell>
                    <TableCell>Hours Worked</TableCell>
                    <TableCell>No. Reviews</TableCell>
                </TableRow>
            </TableHead>
            <TableBody className="action-cell">
                {incompletedTasks.map((row) => (
                    <IncompleteTaskRow
                        key={row.id}
                        row={row}
                        // setLoading={props.setLoading}
                        // setLoadingEditTask={props.setLoadingEditTask}
                    />
                ))}
            </TableBody>
        </Table>
    );
};

export default IncompleteTasksTable;
