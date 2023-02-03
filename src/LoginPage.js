import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { getAuth, onAuthStateChanged } from './firebase/firebase';
import Login from './Login';
import { Navigate } from 'react-router-dom';

export default function LoginPage() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        return 
      }
    });
    console.log('page loaded');
  }, []);

  return (
    <div className='app'>

      {!user ? (
        <Login />
      ) : (

      <div>
        <Navigate to="/" replace={true}/>
        You shouldn't see this
      </div>
      )}
    </div>
  );
}
    