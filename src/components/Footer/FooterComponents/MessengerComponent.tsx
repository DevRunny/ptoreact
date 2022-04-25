import React from 'react';

type Props = {
  href: string
  urlImage: string
  alt: string
}

const MessengerComponent: React.FC<Props> = ({href, urlImage, alt}) => {
  return (
      <a href={href}><img src={urlImage} alt={alt} /></a>
  );
}

export default MessengerComponent;