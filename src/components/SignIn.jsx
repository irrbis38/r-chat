import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const style = {
  signIn: `flex justify-center`,
};

const googleSingIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

export const SignIn = () => {
  return (
    <div className={style.signIn}>
      <GoogleButton onClick={googleSingIn} />
    </div>
  );
};
