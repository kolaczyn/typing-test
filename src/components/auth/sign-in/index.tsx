import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Box from '../../common/box';
import Button from '../../common/button';
import InputField from '../../common/input-field';
import Container from './styles';
import app from '../../../firebase';

import * as actions from '../../../reducers/toast/actions';
import ToastDispatchContext from '../../../contexts/ToastDispatchContext';

const SignIn: React.FC = () => {
  const history = useHistory();
  const dispatch = useContext(ToastDispatchContext);

  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      setIsPending(true);
      await app.auth().signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatch({
        type: actions.PUSH_TOAST,
        payload: { content: err.message, type: 'danger' },
      });
    }
    setIsPending(false);
  };
  return (
    <Box title="Sign In">
      <form>
        <Container>
          <label htmlFor="email">Email</label>
          <InputField
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            secondary
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="password">Password</label>
          <InputField
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            secondary
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <Button primary onClick={handleSubmit} isActive={!isPending}>
            {isPending ? 'Please wait...' : 'Sign In'}
          </Button>
        </Container>
      </form>
    </Box>
  );
};
export default SignIn;
