import { useState } from 'react';

import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

import { loginByUserName } from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import cl from './LoginActions.module.scss';

// todo remove reactfire in package json

export const GoogleAuthAction = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useAppDispatch();

  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const { user } = result;

          // dispatch(loginByUserName({ username, password })),
          dispatch(
            loginByUserName({
              username: user.email,
              password: user.email,
              // displayName: user.displayName,
              // email: user.email,
              // photoURL: user.photoURL,
              // uid: user.uid
            }),
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const { email } = error.customData;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    } catch (error) {
      console.error('Google authentication error:', error);
      setErrorMessage('An error occurred during authentication.');
    }
  };

  return (
    <div className={cl.googleCard}>
      <button className={cl.googleCardButton} onClick={handleSignInWithGoogle}>
        <img
          alt=""
          className={cl.googleCardButtonIcon}
          src="https://img.icons8.com/color/512/google-logo.png"
        />
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
