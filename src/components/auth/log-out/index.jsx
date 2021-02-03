import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import app from '../../../firebase';

export default function LogOut() {
  const history = useHistory();
  useEffect(() => {
    app.auth().signOut();
    history.push('/');
  }, []);
  return (
    null
  );
}
