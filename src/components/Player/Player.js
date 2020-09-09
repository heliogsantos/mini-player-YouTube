import React from 'react';

import { Wrapper, Video, Layer, VideoContent, Description } from './style.js';
import FalaDev from '../../assets/videos/falaDev.mp4';
import IconArrow from '../IconArrow/Button.js';

const Player = (props) => {
  return (
    <Wrapper>
      <VideoContent>
        <Layer />
        <Video src={FalaDev} />
      </VideoContent>

      <Description>
        <div className="text">
          <h1>🚀 Fala Dev | Vamos falar sobre React JS.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="arrow-icon">
          <IconArrow />
        </div>
      </Description>
    </Wrapper>
  );
};

export default Player;
