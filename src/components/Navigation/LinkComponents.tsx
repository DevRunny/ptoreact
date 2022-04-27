import React from 'react';

type Props = {
  href: string
  nameLink: string
  mainClass: string
}

const LinkComponent: React.FC<Props> = ({href, nameLink, mainClass}) => {
  return (
      <li className={mainClass}><a href={href}>{nameLink}</a></li>
  );
}

export default LinkComponent;