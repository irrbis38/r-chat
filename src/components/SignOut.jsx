import React from "react";
import { auth } from "./../firebase";

const style = {
  logOut: `bg-gray-200 px-4 py-2 hover:bg-gray-100 pointer transition`,
};

const SignOut = () => {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <button className={style.logOut} onClick={() => auth.signOut()}>
      LogOut
    </button>
  );
};

export default SignOut;
