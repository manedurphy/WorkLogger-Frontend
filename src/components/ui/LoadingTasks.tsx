import React from 'react';

const LoadingTasks = (): JSX.Element => {
    return (
        <div style={{ marginTop: '140px' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <img
                    src={'https://work-logger-connor.s3.amazonaws.com/work-logger-logo-min.png'}
                    width={'150px'}
                    style={{ marginLeft: '45px' }}
                />
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                <div className={'dot-flashing'}></div>
            </div>
        </div>
    );
};

export default LoadingTasks;
