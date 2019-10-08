import React from 'react';
import Navigation from './Navigation';
import Dashboard from './Dashboard';
import Extra from './Extra';

const App = () => {
    return (
        <div className='main'>
            <Navigation />
            <Dashboard />
            <Extra />
        </div>
    );
};

export { App as default};