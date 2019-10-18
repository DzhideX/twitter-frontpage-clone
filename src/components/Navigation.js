import React from 'react';
import twitter from '../images/twitter.png';
import hashtag from '../images/navigation-icons/hashtag.png';
import birdhouse from '../images/navigation-icons/birdhouse.png';
import bell from '../images/navigation-icons/bell.png';
import bookmark from '../images/navigation-icons/bookmark.png';
import envelope from '../images/navigation-icons/envelope.png';
import list from '../images/navigation-icons/list.png';
import more from '../images/navigation-icons/more.png';
import headshot1 from '../images/headshot1.jpg';


const NavigationDiv = ({imgsrc, text}) => {
  return (
      <div className='container'>
        <img className={imgsrc===headshot1 ? 'headshot1' : null} src={imgsrc} height='27px' width='27px' alt=''/>
        <p> {text} </p>
      </div>
  );
};

const Navigation = () => {
    return (
        <div className='navigation'>
                <div className='buttons-container'>
                    <img className='tweet-logo' src={twitter} height='45px' width='45px' alt=''/>
                    <NavigationDiv imgsrc={birdhouse} text={'Home'}/>
                    <NavigationDiv imgsrc={hashtag} text={'Explore'}/>
                    <NavigationDiv imgsrc={bell} text={'Notifications'}/>
                    <NavigationDiv imgsrc={envelope} text={'Messages'}/>
                    <NavigationDiv imgsrc={bookmark} text={'Bookmarks'}/>
                    <NavigationDiv imgsrc={list} text={'Lists'}/>
                    <NavigationDiv imgsrc={headshot1}text={'Profile'}/>
                    <NavigationDiv imgsrc={more} text={'More'}/>
                    <div className='button-container'>
                        <button> Tweet </button>
                    </div>
            </div>
        </div>
    );
};

export { Navigation as default };