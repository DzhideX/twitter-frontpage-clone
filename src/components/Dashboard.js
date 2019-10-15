import React from 'react';
import logo from '../images/twitter.png';
import photo from '../images/circle.png';
import chart from '../images/input-icons/chart.png';
import gif from '../images/input-icons/gif.png';
import picture from '../images/input-icons/picture.png';
import smiley from '../images/input-icons/smiley.png';
import { CircularProgressbar } from 'react-circular-progressbar';
import landscape1 from '../images/landscape1.jpg';
import landscape2 from '../images/landscape2.jpg';
import downarrow from '../images/downarrow.png';
import headshot1 from '../images/headshot1.jpg';
import headshot2 from '../images/headshot2.jpg';
import comment from '../images/tweet-icons/comment.png';
import exchange from '../images/tweet-icons/exchange.png';
import like from '../images/tweet-icons/like.png';
import upload from '../images/tweet-icons/upload.png';

const DashboardInfo = () => {
    return (
        <div className='dashboard-info'>
            <h3 className='dashboard-info__title'> Latest tweets </h3>
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
                    <img src={headshot1} height='47px' alt='pic' />
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

const Tweet = ({headshotsrc, imgsrc, name, username, time, text }) => {
    return (
        <div className='tweet'>
            <div className='tweet-image'>
                <img src={headshotsrc} alt='profile' width='50px' height='50px'/>
            </div>
            <div className='tweet-content'>
                <div className='tweet-info'>
                    <div className='div1'>
                        <p className='username'> {name} </p>
                        <p> {username}</p>
                        <p>· {time}</p>
                    </div>
                    <div className='div2'>
                        <img src={downarrow} alt='arrow down' height='12px' width='12px'/>
                    </div>
                </div>
                <div className='tweet-text'>
                    <p> {text}</p>
                </div>
                <div className='tweet-pic'>
                <img src={imgsrc} alt='landscape' height='245px' width='555px'/>
                </div>
                <div className='tweet-functions'>
                    <div> <img src={comment} height='15px' width='15px'/> <p> 252 </p> </div>
                    <div> <img src={exchange} height='15px' width='15px'/> <p> 13 </p> </div>
                    <div> <img src={like} height='15px' width='15px'/> <p> 2200 </p> </div>
                    <div> <img src={upload} height='15px' width='15px'/> </div>
                </div>
            </div>
        </div>
    );
};

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <DashboardInfo />
            <DashboardInput />
            <Tweet headshotsrc={headshot1} imgsrc={landscape1} name={'Edvin Dzidic'} username={'@DzideX'} time={'1h'} text={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}/>
            <Tweet headshotsrc={headshot2} imgsrc={landscape2} name={'Someone Else'} username={'@Incognito'} time={'1d'} text={"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."}/>
        </div>
    );
};

export { Dashboard as default };