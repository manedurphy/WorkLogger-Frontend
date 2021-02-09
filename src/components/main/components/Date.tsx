import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

const DateAndTime = (): JSX.Element => {
    const [date, setDate] = useState(new Date().toLocaleString());

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date().toLocaleString()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Typography component="p" variant="h6">
                Today
            </Typography>
            <Typography color="textSecondary">{date}</Typography>
        </div>
    );
};

export default DateAndTime;
