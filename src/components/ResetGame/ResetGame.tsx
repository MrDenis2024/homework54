import React, {MouseEventHandler} from 'react';

interface Props {
  onClick: MouseEventHandler;
}

const ResetGame: React.FC<Props> = ({onClick}) => {
  return (
    <button onClick={onClick}>
      Перезапустить игру
    </button>
  );
};

export default ResetGame;