import React from 'react';

type Props = {
  titleText: string
  mainStyle: string
}

const AdminMainTitle: React.FC<Props> = ({titleText, mainStyle}) => {
  return (
      <h1 className={mainStyle}>{titleText}</h1>
  );
}

export default AdminMainTitle;