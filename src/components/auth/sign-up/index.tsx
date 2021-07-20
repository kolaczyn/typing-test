import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '../../common/box';
import Button from '../../common/button';
import InputField from '../../common/input-field';
import app from '../../../firebase';
import Container from './styles';

import ToastAction from '../../../reducers/toast/actions';
import ToastDispatchContext from '../../../contexts/ToastDispatchContext';
import { ToastType } from '../../../reducers/toast/reducer';

const SignUp: React.FC = () => {
  const history = useHistory();
  const dispatch = useContext(ToastDispatchContext);
  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      setIsPending(true);
      await app.auth().createUserWithEmailAndPassword(email, password);
      history.push('/');
    } catch (err) {
      dispatch({
        type: ToastAction.PUSH_TOAST,
        payload: { content: err.message, type: ToastType.Danger },
      });
    }
    setIsPending(false);
  };
  return (
    <Box title="Sign Up">
      <form>
        <Container>
          <label htmlFor="email">Email</label>
          <InputField
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            secondary
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="password">Password</label>
          <InputField
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            secondary
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button primary onClick={handleSubmit} isActive={!isPending}>
            {isPending ? 'Please wait...' : 'Sign In'}
          </Button>
        </Container>
      </form>
    </Box>
  );
};
export default SignUp;
