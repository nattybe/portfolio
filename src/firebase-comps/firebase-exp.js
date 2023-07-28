import React from "react";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyD7Pds7gKW7V0cv3rrWYwUgDL0xoso-5Uc",
  authDomain: "my-portfolio-28414.firebaseapp.com",
  projectId: "my-portfolio-28414",
  storageBucket: "my-portfolio-28414.appspot.com",
  messagingSenderId: "160274144232",
  appId: "1:160274144232:web:99b684b0fb85cc1a38625d",
};

function firebaseExp() {}
export function AuthPage() {
  const signIn = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(
      auth,
      document.getElementById("email").value,
      document.getElementById("password").value
    ).catch(async (err) => {
      if (err.code === "auth/user-not-found") {
        await createUserWithEmailAndPassword(
          auth,
          document.getElementById("email").value,
          document.getElementById("password").value
        ).catch((err) => {
          if (err.code === "auth/weak-password") {
            alert("password must be greater than 6 characters");
          } else {
            console.warn(err.code);
          }
        });
      } else if (err.code === "auth/wrong-password") {
        alert("wrong Password");
      } else {
        console.error(err.code);
      }
    });
  };
  return (
    <>
      <div className="diag-header">
      <h3>Sign In with Email </h3>
        <button
          className="diag-close"
          onClick={() => {
            document.getElementById("contact-diag").close();
          }}
        >
          X
        </button>
      </div>
      <div className="m-auto">
        <form onSubmit={(e) => signIn(e)}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              required
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="checkbox"
              className="form-check-input"
              id="remember"
            />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary float-right">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
const app = initializeApp(firebaseConfig);
export const firestore=getFirestore(app);
export const auth = getAuth(app);
export const signOuter = () => signOut(auth);
export default firebaseExp;
