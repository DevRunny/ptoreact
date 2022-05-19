import React from 'react';

type Props = {
  titleText: string
}

const AdminMainTitle: React.FC<Props> = ({titleText}) => {
  return (
      <h1 className={"adminMainTitle"}>{titleText}</h1>
  );
}

export default AdminMainTitle;