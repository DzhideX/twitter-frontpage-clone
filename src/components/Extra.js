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
                    <img src={gear} height='18px' width='18px' alt=''/>
                </div>
                <div className='section hover'>
                    <p> Bosnia </p>
                </div>
                <div className='bottom-section'>
                {/* eslint-disable-next-line*/}
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
                <div className='section hover'>
                    <img src={headshot1} height='40px' width='40px' alt=''/>
                    <div className='info'>
                        <p className='name'> Rickle Pick</p>
                        <p className='username'> @Boujee </p>
                    </div>
                    <button > Follow </button>
                </div>
                <div className='section hover'>
                    <img src={headshot2} height='40px' width='40px' alt=''/>
                    <div className='info'>
                        <p className='name'> Someone else</p>
                        <p className='username'> @Incognito </p>
                    </div>
                    <button > Follow </button>
                </div>
                <div className='section hover'>
                <img src={headshot3} height='40px' width='40px' alt=''/>
                        <div className='info'>
                            <p className='name'> No one</p>
                            <p className='username'> @AryaStark </p>
                        </div>
                        <button > Follow </button>
                </div>
                <div className='bottom-section hover'>
                {/* eslint-disable-next-line*/}
                    <a> Show more </a>
                </div>
            </div>
        </div>
    );
};

const Extra = () => {
    return (
        <div className='extra'>
            <div className='extra-div-right'>
                <SearchTwitter />
                <ExtraItems />
                <WhoToFollow />
                <div className='text-bottom'>
                    <a> Terms </a>
                    <a> Privacy policy </a>
                    <a> Cookies </a>
                    <a> Ads info </a>
                </div>
                <div className='text-bottom'>
                    <a> More </a>
                    <a> © 2019 Twitter, Inc. </a>
                </div>
            </div>
        </div>
    );
};

export { Extra as default };