import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const styles = {
  form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};

export const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    // scroll.current.scrollIntoView({ behavior: "smoth" });
  };

  return (
    <form className={styles.form} onSubmit={sendMessage}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Type your message..."
      />
      <button className={styles.button} type="submit">
        Send
      </button>
    </form>
  );
};
