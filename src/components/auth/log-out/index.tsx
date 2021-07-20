import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import app from '../../../firebase';

const LogOut: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    app.auth().signOut();
    history.push('/');
  }, []);
  return null;
};
export default LogOut;
