import React from 'react';

import { Icon } from './style';
import { ArrowIconDown, ArrowIconTop } from '../../utils.js/images.js';

const IconArrow = () => {
  const [icon, setIcon] = React.useState(ArrowIconTop);
  const [active, setActive] = React.useState(false);

  function handleClick() {
    setIcon((icon) => (icon === ArrowIconTop ? ArrowIconDown : ArrowIconTop));

    setActive((active) => (active = true));

    setTimeout(() => {
      setActive((active) => (active = false));
    }, 200);
  }

  return (
    <Icon onMouseDown={handleClick} style={{ fill: '#606060' }} active={active}>
      <path d={icon}></path>
    </Icon>
  );
};

export default IconArrow;
