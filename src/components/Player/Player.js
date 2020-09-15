import React from 'react';

import {
  Wrapper,
  Video,
  Layer,
  VideoContent,
  Description,
  List,
} from './style.js';
import FalaDev from '../../assets/videos/falaDev.mp4';
import IconArrow from '../IconArrow/IconArrow.js';
import CardVideo from '../CardVideo/CardVideo.js';

const Player = () => {
  const [activePlayer, setActivePlayer] = React.useState(false);

  const handleClick = () => {
    setActivePlayer((togglePlayer) => {});
  };

  const handleClickOpenPlayer = () => {
    if (!activePlayer) {
      return setActivePlayer((active) => !active);
    }
  };

  const fila = '4 / 5';

  return (
    <Wrapper active={activePlayer}>
      <VideoContent>
        <Layer />
        <Video src={FalaDev} />
      </VideoContent>

      <Description onClick={handleClickOpenPlayer}>
        <div>
          <h1>🚀 Fala Dev | Vamos falar sobre React JS.</h1>
          <span>
            <p>Fila</p>
            <p>{fila}</p>
          </span>
        </div>
        <div>
          <IconArrow playerActive={handleClick} isCollapsed={activePlayer} />
        </div>
      </Description>

      <List>
        {[1, 2, 3, 4, 3, 4, 5, 76].map((item, index) => (
          <CardVideo key={index} />
        ))}
      </List>
    </Wrapper>
  );
};

export default Player;
