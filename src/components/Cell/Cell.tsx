import React, {CSSProperties} from 'react';

interface Props {
  onChange: boolean;
  onRing: boolean;
  onClick: React.MouseEventHandler;
}

const Cell: React.FC<Props> = ({onChange, onRing, onClick}) => {
  const styleContainer: CSSProperties = {width: '20px', height: '20px', backgroundColor: 'gray', margin: '3px'};
  const styleRing: CSSProperties = {display: 'none'};

  if(onChange) {
    styleContainer.backgroundColor = 'transparent';
    styleRing.display = 'block';
  }


  return (
    <div style={styleContainer} onClick={onClick}>
      {onRing ? <span style={styleRing}>O</span> : null}
    </div>
  );
};

export default Cell;