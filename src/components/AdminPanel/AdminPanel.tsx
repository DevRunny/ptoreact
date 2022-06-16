import React, {useEffect} from 'react';
import {useAuth} from "../../hooks/useAuth";
import style from "./AdminPanel.module.css"
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import AdminRouter from "./AdminRouter/AdminRouter";

type Props = {}

const AdminPanel: React.FC<Props> = () => {

  const history = useAuth()

  useEffect(() => {
    history.redirect()
  }, [])

  return (
      <div className={style.container}>
        <LeftSideBar />
        <AdminRouter />
      </div>
  );
}

export default AdminPanel;