import React from 'react';

//import clock
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
//clock css
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

//import video
import VideoBg from '../src/assets/video.mp4';

//import css
import './styles.css';

const App = () => {
  return <section className='page'>
    {/* overlay */}
    <div className='overlay'></div>
    {/* video */}
    <video src={VideoBg} autoPlay loop muted></video>
    {/* content */}
    <div className="page__content">
      <h1>Launching Soon</h1>
      <h3></h3>
    </div>
  </section>;
};

export default App;
