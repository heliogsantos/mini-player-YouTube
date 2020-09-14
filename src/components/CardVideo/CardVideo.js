import React from 'react';

import { WraperVideoInfo, InfoVodeo, DescriptionInfo } from './style.js';
import FalaDev from '../../assets/videos/falaDev.mp4';

const CardVideo = () => {
  const limitText = (text) => {
    const sizeText = 50;
    return text.length > sizeText ? `${text.slice(0, sizeText)}...` : text;
  };

  return (
    <WraperVideoInfo>
      <InfoVodeo>
        <video src={FalaDev}></video>
      </InfoVodeo>
      <DescriptionInfo>
        <h2>
          {limitText(
            'Lorem ipsum dolor sit amet consectetur consectetur teste',
          )}
        </h2>
        <p>Rocketseat</p>
      </DescriptionInfo>
    </WraperVideoInfo>
  );
};

export default CardVideo;
