import React from 'react';
import gear from '../images/settings.png';
import headshot1 from '../images/headshot1.jpg';
import headshot2 from '../images/headshot2.jpg';
import headshot3 from '../images/headshot3.jpg';

const SearchTwitter = () => {
    return (
        <div className='search-twitter-input'>
            <input placeholder=' Search twitter'/>
        </div>
    );
};

const ExtraItems = () => {
    return (
        <div className='extra-items'>
            <div className='big-section'> 
                <div className='section'>
                    <h3> Trends for you </h3>
                    <img src={gear} height='18px' width='18px'/>
                </div>
                <div className='section'>
                    <p> Bosnia </p>
                </div>
                <div className='bottom-section'>
                    <a> Show more </a>
                </div>
            </div>
        </div>
    );
};

const WhoToFollow = () => {
    return (
        <div className='who-to-follow'>
            <div className='big-section'>
                <div className='section'>
                    <h3> Who to follow </h3>
                </div>
                <div className='section'>
                    <img src={headshot1} height='40px' width='40px'/>
                    <div className='info'>
                        <p className='name'> Edvin Dzidic</p>
                        <p className='username'> @Dzidex </p>
                    </div>
                    <button > Follow </button>
                </div>
                <div className='section'>
                    <img src={headshot2} height='40px' width='40px'/>
                    <div className='info'>
                        <p className='name'> Someone else</p>
                        <p className='username'> @Incognito </p>
                    </div>
                    <button > Follow </button>
                </div>
                <div className='section'>
                <img src={headshot3} height='40px' width='40px'/>
                        <div className='info'>
                            <p className='name'> No one</p>
                            <p className='username'> @AryaStark </p>
                        </div>
                        <button > Follow </button>
                </div>
                <div className='bottom-section'>
                    <a> Show more </a>
                </div>
            </div>
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