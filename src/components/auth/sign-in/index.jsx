/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '../../common/box';
import Button from '../../common/button';
import InputField from '../../common/input-field';
import Container from './styles';
import app from '../../../firebase';

export default function SignIn() {
  const history = useHistory();
  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsPending(true);
      await app
        .auth()
        .signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (err) {
      alert(err);
    }
    setIsPending(false);
  };
  return (
    <Box title="Sign In">
      <form>
        <Container>
          <label htmlFor="email">Email</label>
          <InputField secondary type="email" id="email" value={email} onChange={handleEmailChange} />
          <label htmlFor="password">Password</label>
          <InputField secondary type="password" id="password" value={password} onChange={handlePasswordChange} />
          <Button primary onClick={handleSubmit} isActive={!isPending}>{isPending ? 'Please wait...' : 'Sign In'}</Button>
        </Container>
      </form>
    </Box>
  );
}
