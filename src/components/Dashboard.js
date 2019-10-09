import React from 'react';
import logo from '../images/twitter.png';
import photo from '../images/circle.png';
import chart from '../images/input-icons/chart.png';
import gif from '../images/input-icons/gif.png';
import picture from '../images/input-icons/picture.png';
import smiley from '../images/input-icons/smiley.png';
import { CircularProgressbar } from 'react-circular-progressbar';

const DashboardInfo = () => {
    return (
        <div className='dashboard-info'>
            <p className='dashboard-info__title'> Latest tweets </p>
            <img className='dashboard-info__image' src={logo} height='30px' alt='logo' />
        </div>
    );
};

class DashboardInput extends React.Component {

    state = {
        tweet:''
    };

    updateInput = (e) => {
        const tweet = e.target.value;
        console.log(tweet);
        if(tweet.length <= 140){
            this.setState(prevState => ({
                tweet
            }));
        }
    };

    render(){
        return (
            <div className='dashboard-input'>
                <div className='dashboard-input-image'>
                    <img src={photo} height='47px' alt='pic' />
                </div>
                <div className='dashboard-input-tweet-space'>
                    <div className='dashboard-input-tweet-input'>
                        <input placeholder="What's happening? " value={this.state.tweet} onChange={this.updateInput}/>
                    </div>
                    <div className='dashboard-input-buttons'>
                        <div className='dashboard-input-buttons__space'>
                            <img src={picture} height='20px' alt='chart logo'/>
                            <img src={gif} height='20px' alt='gif logo'/>
                            {/* eslint-disable-next-line */}
                            <img src={chart} height='20px' alt='picture logo'/>
                            <img src={smiley} height='20px' alt='smiley logo'/>
                        </div>
                        <div className='dashboard-input-buttons-submit__space'>
                            <div>
                                <CircularProgressbar className='progress' value={this.state.tweet.length} maxValue={140}/>
                                <div className='horizontal-line'></div>
                                {this.state.tweet.length > 0 ? (<button className='plus plus-button--on'> + </button>) : (<button className='plus plus-button--off'> + </button>)}
                                {this.state.tweet.length > 0 ? (<button className='tweet-button--on'> Tweet </button>) : (<button className='tweet-button--off'> Tweet </button>)}
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        );
    }
    
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
        </div>
    );
};

export { Dashboard as default };