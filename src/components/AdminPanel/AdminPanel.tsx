import React, {useEffect} from 'react';
import {useAuthHistory} from "../../hooks/useAuthHistory";
import style from "./AdminPanel.module.css"
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import Information from "./Pages/Information/Information";

type Props = {}

const AdminPanel: React.FC<Props> = () => {
  const history = useAuthHistory()

  useEffect(() => {
    history.redirect()
  }, [])

  return (
      <div className={style.container}>
        <LeftSideBar />
        <Information />
      </div>
  );
}

export default AdminPanel;