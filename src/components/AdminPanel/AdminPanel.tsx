import React, {useEffect} from 'react';
import {useAuthHistory} from "../../hooks/useAuthHistory";

type Props = {}

const AdminPanel: React.FC<Props> = () => {
  const history = useAuthHistory()

  useEffect(() => {
    history.redirect()
  }, [])

  return (
      <div>
        Admin Panel
      </div>
  );
}

export default AdminPanel;