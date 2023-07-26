// import { SMTPClient } from "emailjs";
// import 'sendmail/sendmail'
import React, { Component } from "react";
import { Button } from "react-bootstrap";

import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";

// import  firestore  from "firebase/firestore";
// import { Auth } from "firebase/auth";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7Pds7gKW7V0cv3rrWYwUgDL0xoso-5Uc",
  authDomain: "my-portfolio-28414.firebaseapp.com",
  projectId: "my-portfolio-28414",
  storageBucket: "my-portfolio-28414.appspot.com",
  messagingSenderId: "160274144232",
  appId: "1:160274144232:web:99b684b0fb85cc1a38625d",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const firestore = firebase.firestore();

export default function Contacts() {
  const [user] = useAuthState(auth);
  const oldContacts = (
    <>
      <h1 className="text-center">Contact Me</h1>
      <div
        className="contact-me container d-flex border border-3 border-dark rounded rounded-5 p-2"
        id="contact-me"
      >
        <div className="through">
          <div className="btn btn-primary">Telegram</div>
          <div className="btn btn-primary">Mail</div>
          <div className="btn btn-primary">FaceBook</div>
        </div>
        <div className="messanger-bod">
          <div class="mb-3 mt-1 ms-1 me-1">
            <input
              type="email"
              name=""
              id=""
              class="form-control"
              placeholder="example@mail.com"
              aria-describedby="helpId"
            />
          </div>
          <div class="mb-3 ms-1 me-1">
            <input
              type="password"
              name=""
              id=""
              class="form-control"
              placeholder="Password"
              aria-describedby="helpId"
            />

            <div class="mb-3">
              <label for="" class="form-label"></label>
              <textarea
                class="form-control"
                name=""
                id=""
                placeholder="Messages goes Here"
                rows="5"
              ></textarea>
              <Button className="mt-2">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  const signin = () => {
    // const pr=getAuth.
    /* TODO: lost in the abyss */
  };
  // const client = new SMTPClient({
  //   user: "user",
  //   password: "password",
  //   host: "smtp.your-email.com",
  //   ssl: true,
  // });
  // const messanger = async () => {
  //   const message = await client.sendAsync({
  //     text: "hello world",
  //     from: "you <username@your-email.com>",
  //     to: "themanintheomoon@gmail.com",
  //     cc: "else <else@your-email.com>",
  //     subject: "testing emailjs",
  //   });
  // };
  // const sendmail = require("sendmail")();

  // sendmail(
  //   {
  //     from: "no-reply@yourdomain.com",
  //     to: "test@qq.com, test@sohu.com, test@163.com ",
  //     subject: "test sendmail",
  //     html: "Mail of test sendmail ",
  //   },
  //   function (err, reply) {
  //     console.log(err && err.stack);
  //     console.dir(reply);
  //   }
  // );
  const messenger = (
    <dialog id="contact-diag" className="border border-warning p-2 rounded-2">
      <div className="messenger">
        <div className="diag-header">
          <h3> Contact me</h3>
          <button
            className="diag-close"
            onClick={() => {
              document.getElementById("contact-diag").close();
            }}
          >
            X
          </button>
        </div>
        <div className="messenger-body">
          <div className="messages d-flex">
            <div className="not-owner">hello am contacting</div>
            <div className="not-owner">hello am contacting</div>
            <div className="not-owner">hello am contacting</div>
            <div className="not-owner">hello am contacting</div>
            <div className="not-owner">hello am contacting</div>
            <div className="not-owner">hello am contacting</div>
            <div className="not-owner">hello am contacting</div>
            <div className="not-owner">hello am contacting</div>
            <div className="owner">
              and am the owner.
            </div>
            <div className="not-owner">
            Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Enim nesciunt ullam magni, consequuntur, at
              accusamus ratione autem corrupti aut quibusdam officia labore
              tempore hic deserunt sint iste, nihil nostrum alias.
            </div>
          </div>
          <div className="d-flex send-div">
            <input type="text" className="form-control" />
            <button className="contact-send" id="send-button">
              <i className=" far fa-paper-plane" />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
  return messenger;
}
