import React, {useContext} from 'react';
import {SectionRefs} from "../../Context/SectionRefs";

type Props = {
  href: string
  nameLink: string
  mainClass: string
}

const LinkComponent: React.FC<Props> = ({href, nameLink, mainClass}) => {

  const linkRef = useContext(SectionRefs)

  // const onClickForScroll = () => {
  //   window.scrollTo(0, linkRef.accreditation)
  // }

  return (
      <li className={mainClass}><a href={href}>{nameLink}</a></li>
  );
}

export default LinkComponent;