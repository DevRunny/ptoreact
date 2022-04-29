import React from 'react';

export type IButton = {
  text: string
  func: () => void
  mainStyle: string
}

const Button: React.FC<IButton> = ({text, func, mainStyle}) => {
  return (
      <button onClick={func} className={mainStyle}>{text}</button>
  );
}

export default Button;