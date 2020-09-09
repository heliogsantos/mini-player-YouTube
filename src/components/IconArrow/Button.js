import React from 'react';

import { Icon } from './style';
import { ArrowIconDown, ArrowIconTop } from '../../utils.js/images.js';

const IconArrow = () => {
  const [icon, setIcon] = React.useState(ArrowIconTop);

  function handleClick() {
    setIcon((icon) => (icon === ArrowIconTop ? ArrowIconDown : ArrowIconTop));
  }

  return (
    <Icon onClick={handleClick} style={{ fill: '#606060' }}>
      <path d={icon}></path>
    </Icon>
  );
};

export default IconArrow;
