import React, { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from './firebase/firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Stack, Container } from 'react-bootstrap';
import Header from './Header';


function Login() {
// use state constants for the the form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const auth = getAuth();

  const loginToApp = (e) => {
    e.preventDefault();

    // Sign in an existing user with Firebase
    signInWithEmailAndPassword(auth, email, password)
    // returns  an auth object after a successful authentication
    // userAuth.user contains all our user details
      .then((userAuth) => {
      // store the user's information in the redux state
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
// display the error if any
      .catch((err) => {
        alert(err);
      });
  };

// A quick check on the name field to make it mandatory
  const register = () => {
    if (!name) {
      return alert('Please enter a full name');
    }

    // Create a new user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
      // Update the newly created user with a display name and a picture
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: profilePic,
        })
          .then(
            // Dispatch the user information for persistence in the redux state
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            )
          )
          .catch((error) => {
            console.log('user not updated');
          });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <Header />
      <Container>     
        <Form>
          <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Your Full Name</Form.Label>
          {/*
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Full name (required for registering)'
            type='text'
          />
          */}
          <Form.Control type="Full Name" placeholder="Full name (required for registering)" onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProfilPic">
          <Form.Control
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder='Profile picture URL (optional)'
            type='text'
          />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            type='email'
          />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            type='password'
          />
          </Form.Group>
          <Stack direction="horizontal" gap={3}>
            <Button variant="primary" type='submit' onClick={loginToApp}>
              Sign In
            </Button>
            <Button variant="outline-primary" onClick={register}>
              Register Now
            </Button>
          </Stack>
          
        </Form>
      </Container>
    </div>
  );
}

export default Login;