import React from 'react';

const SearchTwitter = () => {
    return (
        <div className='search-twitter-input'>
            <input />
        </div>
    );
};

const ExtraItems = () => {
    return (
        <div className='extra-items'>
            <div>
                <p> No items. </p>
            </div>
        </div>
    );
};

const WhoToFollow = () => {
    return (
        <div className='who-to-follow'>
            <div></div>
        </div>
    );
};

const Extra = () => {
    return (
        <div className='extra'>
            <div className='extra-div'>
                <SearchTwitter />
                <ExtraItems />
                <WhoToFollow />
            </div>
        </div>
    );
};

export { Extra as default };