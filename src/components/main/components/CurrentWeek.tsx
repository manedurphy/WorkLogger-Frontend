import React from 'react';
import Date from './Date';
// import Typography from '@material-ui/core/Typography';
// import Pagination from '@material-ui/lab/Pagination';
import Title from './Title';
// import Date from './Date';
// import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../../redux/types';
// import { Typography } from '@material-ui/core';
// import { getDispatchDate, getFilterTasksDue, getFormattedDate } from '../global/functions/helpers';
// import { getProductivityData } from '../global/functions/axios';

// const useStyles = makeStyles((theme) =>
//     createStyles({
//         root: {
//             '& > *': {
//                 marginTop: theme.spacing(2),
//             },
//         },
//         depositContext: {
//             flex: 1,
//             color: 'grey',
//         },
//     }),
// );

const Deposits = (): JSX.Element => {
    // const classes = useStyles();
    // const { dispatch } = useContext(GlobalContext);
    // const { user, tasks, date } = useContext(GlobalContext).state;
    const { user } = useSelector((state: IGlobalState) => state);
    // const [page, setPage] = useState(1);

    // useEffect(() => {
    //     const resetDate = getDispatchDate();

    //     dispatch({
    //         type: Dates.setDateAndTasksDue,
    //         payload: {
    //             dueDate: resetDate,
    //             tasksDue: getFilterTasksDue(tasks.currentTasks, resetDate),
    //         },
    //     });

    //     (async () => {
    //         dispatch({
    //             type: Productivities.setProductivity,
    //             payload: await getProductivityData(),
    //         });
    //     })();
    //     setPage(1);
    // }, [tasks.currentTasks]);

    // const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    //     const newDate =
    //         value > page
    //             ? getFormattedDate(Dates.ADD, value - page, date.dueDate)
    //             : getFormattedDate(Dates.SUBTRACT, page - value, date.dueDate);

    //     dispatch({
    //         type: Dates.setDateAndTasksDue,
    //         payload: {
    //             dueDate: newDate,
    //             tasksDue: getFilterTasksDue(tasks.currentTasks, newDate),
    //         },
    //     });
    //     setPage(value);
    // };

    return (
        <>
            <Title>{user.firstName && `Good Morning ${user.firstName}`}</Title>

            <Date />
            {/* <Typography className={classes.depositContext}>
                {date.tasksDue.length >= 5
                    ? 'Due: ' +
                      date.tasksDue
                          .map((task) => task.name)
                          .slice(0, 5)
                          .join(', ')
                    : date.tasksDue.length
                    ? 'Due: ' + date.tasksDue.map((task) => task.name).join(', ')
                    : 'Nothing due'}
            </Typography>
            <div className={classes.root}>
                <Pagination
                    count={5}
                    defaultPage={1}
                    boundaryCount={3}
                    siblingCount={0}
                    page={page}
                    onChange={handleChange}
                />
            </div> */}
        </>
    );
};

export default Deposits;
