import React from 'react';

export type IButton = {
  text: string
  func?: () => void
  mainStyle: string
  type: "button" | "submit" | "reset" | undefined
}

const Button: React.FC<IButton> = ({text, func, mainStyle, type}) => {
  return (
      <button onClick={func} className={mainStyle} type={type}>{text}</button>
  );
}

export default Button;