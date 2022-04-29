import React from 'react';

type Props = {
  nameLink: string
  mainClass: string
  currentRef: HTMLDivElement | null
}

const LinkComponent: React.FC<Props> = ({nameLink, mainClass, currentRef}) => {

  const scrollToCurrentRef = () => {
    return currentRef && window.scrollTo( {top: currentRef.offsetTop, behavior: "smooth"})
  }

  return (
      <li className={mainClass}><a onClick={scrollToCurrentRef}>{nameLink}</a></li>
  );
}

export default LinkComponent;