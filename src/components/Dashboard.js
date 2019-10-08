import React from 'react';

const DashboardInfo = () => {
    return (
        <div className='dashboard-info'>
        
        </div>
    );
};

const DashboardInput = () => {
    return (
        <div className='dashboard-input'>
        
        </div>
    );
};

const Tweet = () => {
    return (
        <div className='tweet'>

        </div>
    );
};

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <DashboardInfo />
            <DashboardInput />
            <Tweet />
            <Tweet />
        </div>
    );
};

export { Dashboard as default };