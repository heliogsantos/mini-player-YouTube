import React from 'react';

import { Icon } from './style';
import { ArrowIconDown, ArrowIconTop } from '../../utils.js/images.js';

const IconArrow = ({ playerActive, isCollapsed }) => {
  const [icon, setIcon] = React.useState(ArrowIconTop);
  const [active, setActive] = React.useState(false);

  const disabledPlayer = () => {
    setActive((active) => (active = true));
    setTimeout(() => {
      setActive((active) => (active = false));
    }, 200);
  };

  React.useEffect(() => {
    setIcon((icon) => (icon === ArrowIconTop ? ArrowIconDown : ArrowIconTop));
    if (isCollapsed) {
      disabledPlayer();
    } else {
      disabledPlayer();
    }
  }, [isCollapsed]);

  return (
    <Icon
      onClick={() => playerActive()}
      style={{ fill: '#606060' }}
      active={active}
    >
      <path d={icon}></path>
    </Icon>
  );
};

export default IconArrow;
