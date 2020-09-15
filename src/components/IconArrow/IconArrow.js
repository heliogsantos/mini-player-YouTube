import React from 'react';

import { Icon } from './style';
import { ArrowIconDown, ArrowIconTop } from '../../utils.js/images.js';

const IconArrow = ({ playerActive, isCollapsed }) => {
  const [icon, setIcon] = React.useState(ArrowIconTop);
  const [active, setActive] = React.useState(false);

  const disabledPlayer = () => {
    setActive((active) => (active = true));
    setTimeout(() => {
      setActive((activePlayer) => !activePlayer);
    }, 200);
  };

  React.useEffect(() => {
    setIcon((iconArrow) =>
      iconArrow === ArrowIconTop ? ArrowIconDown : ArrowIconTop,
    );
    if (isCollapsed) {
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
