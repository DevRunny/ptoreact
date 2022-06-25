import React from 'react';

export type IButton = {
  text: string
  func?: (e?: any) => void
  onKeyDown?: (e?: any) => void
  mainStyle: string
  type: "button" | "submit" | "reset" | undefined
}

const Button: React.FC<IButton> = ({text, func, onKeyDown, mainStyle, type}) => {
  return (
      <button onKeyDown={onKeyDown} onClick={func} className={mainStyle} type={type}>{text}</button>
  );
}

export default Button;