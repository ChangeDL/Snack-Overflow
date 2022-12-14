import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('')
  const [location, setLocation] = useState('')
  const [full_name, setFull_Name] = useState('')
  const [title, setTitle] = useState('')
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, bio, location, full_name, title));
      if (data) {
        setErrors(data)
      }
    } else{

      return setErrors([
        "Confirm Password field must be the same as the Password field",
      ]);
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateBio = (e) => {
    setBio(e.target.value)
  }

  const updateLocation = (e) => {
    setLocation(e.target.value)
  }

  const updateFullName = (e) => {
    setFull_Name(e.target.value)
  }

  const updateTitle = (e) => {
    setTitle(e.target.value)
  }

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }





  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          required
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          required
        ></input>
      </div>
      <div>
        <label>Biography</label>
        <textarea
          type='text'
          name='bio'
          onChange={updateBio}
          value={bio}
        ></textarea>
      </div>
      <div>
        <label>Location</label>
        <input
          type='text'
          name='location'
          onChange={updateLocation}
          value={location}
        ></input>
      </div>
      <div>
        <label>Full Name</label>
        <input
          type='text'
          name='full_name'
          onChange={updateFullName}
          value={full_name}
          required
        ></input>
      </div>
      <div>
        <label>Title</label>
        <input
          type='text'
          name='title'
          onChange={updateTitle}
          value={title}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          required
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
