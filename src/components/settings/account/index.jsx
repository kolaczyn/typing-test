/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  useContext, useRef, useState, useEffect,
} from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

import Button from '../../common/button';
import AuthContext from '../../../contexts/AuthContext';

export default function Account() {
  const { currentUser } = useContext(AuthContext);
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    firebase.storage().ref(`users/${currentUser.uid}/profile.jpg`).getDownloadURL().then((url) => setImgUrl(url));
  }, []);

  const fileRef = useRef(null);
  const handleAvatar = async (e) => {
    e.preventDefault();
    const file = fileRef.current.files[0];
    try {
      await firebase.storage().ref(`users/${currentUser.uid}/profile.jpg`).put(file);
    } catch (error) {
      console.log(error);
    }
    alert(file.name);
  };
  return (
    currentUser ? (
      <section>
        <p>
          {`Email: ${currentUser.email}`}
        </p>
        <img style={{ width: '2rem', height: '2rem', borderRadius: '50%' }} src={imgUrl} alt="avatar" />
        <form onSubmit={handleAvatar}>
          <label htmlFor="change-avatar">Change profile picture</label>
          <input ref={fileRef} id="change-avatar" type="file" />
          <Button onClick={handleAvatar}>Submit</Button>
        </form>
      </section>
    ) : (
      <section>
        You are not logged in.
        <br />
        <u>
          <Link style={{ display: 'inline' }} to="/sign-up">sign up</Link>
        </u>
        {' '}
        or
        {' '}
        <u>
          <Link to="/sign-in">sign in</Link>
        </u>
      </section>
    )
  );
}
