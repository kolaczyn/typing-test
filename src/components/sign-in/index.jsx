/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '../common/box';
import Button from '../common/button';
import InputField from '../common/input-field';
import app from '../../firebase';

export default function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await app
        .auth()
        .signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (err) {
      alert(err);
    }
  };
  return (
    <Box title="Sign In">
      <form>
        <label htmlFor="email">Email</label>
        <InputField type="email" id="email" value={email} onChange={handleEmailChange} />
        <br />
        <label htmlFor="password">Password</label>
        <InputField type="password" id="password" value={password} onChange={handlePasswordChange} />
        <Button onClick={handleSubmit} secondary>Sign Up</Button>
      </form>
    </Box>
  );
}
