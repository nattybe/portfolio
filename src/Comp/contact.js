import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  AuthPage,
  auth,
  firestore,
  signOuter,
} from "../firebase-comps/firebase-exp";
import { useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  query,
  where,
  orderBy,
  or,
  and,
} from "firebase/firestore";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyD7Pds7gKW7V0cv3rrWYwUgDL0xoso-5Uc",
  authDomain: "my-portfolio-28414.firebaseapp.com",
  projectId: "my-portfolio-28414",
  storageBucket: "my-portfolio-28414.appspot.com",
  messagingSenderId: "160274144232",
  appId: "1:160274144232:web:99b684b0fb85cc1a38625d",
};

// const messageTemplate = {
//   from,to,content,createdAt,
// };
export default function Contacts() {
  const [messages, setMessages] = useState([]);
  const [user] = useAuthState(auth);
  const signOut = () => {
    signOuter();
    setMessages([]);
    // alert("Signed out");
  };
  // a code that gets documents from a firestore collection if their "to" is equal to the users id or "from" is equal to the user id and order by createdAt?

  const messagesCollectionRef = collection(firestore, "messages");
  const getMessages = async () => {
    const q = query(
      messagesCollectionRef,
      (or(where("from", "==", user.uid), where("to", "==", user.uid)),orderBy("createdAt"))
    );
    const data = await getDocs(q).catch((err) => {
      // alert(err.code,err.line);
      console.warn(err);
    });
    // const data = await getDocs(messagesCollectionRef).catch((err) => {
    //   alert(err.code);
    // }); //.then(() =>{
    //   alert("Success");
    // })
    /**
     * this is the structure of the message document
     {
      content : string,
      createdAt : timestamp,
      to: string,
      from: string,
     }
    the above object is a structure of a document in firestore database
    i want to get all the documents in the collection which have a "to" which is equal to X or which have a "from" which is equal to X and orderd by createdAt 

     */
    console.log(data);

    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setMessages(filteredData);
    console.log(filteredData);
  };
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

  useEffect(() => {
    if (user) {
      getMessages();
    }
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    const theMessage = document.getElementById("theMessage");
    // alert(theMessage.value);
    await addDoc(messagesCollectionRef, {
      content: theMessage.value,
      from: user.uid,
      to: "owner",
      createdAt: serverTimestamp(),
    })
      .then(() => {
        // alert("success");
        getMessages();
      })
      .catch((err) => {
        alert(err.code);
      });
    theMessage.value = "";
  };
  const messageFiller = () => {
    const tempMessages = [];
    if (messages) {
      messages.map((mes) => {
        if (mes.from === "owner") {
          tempMessages.push(<div className="owner">{mes.content}</div>);
        } else {
          tempMessages.push(<div className="not-owner">{mes.content}</div>);
        }
      });
      return tempMessages;
    } else {
      return <div className="muted h1">Say Something</div>;
    }
  };
  const messenger = (
    <div className="messenger">
      <div className="diag-header">
        {user ? <h6>{user.email}</h6> : <h3>Contact me</h3>}
        <button
          className="btn btn-primary p-1 "
          onClick={() => {
            signOut();
          }}
        >
          sign Out
        </button>
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
          {messageFiller()}
          {/* <div className="not-owner">hello am contacting</div>
          <div className="not-owner">hello am contacting</div>
          <div className="not-owner">hello am contacting</div>
          <div className="not-owner">hello am contacting</div>
          <div className="not-owner">hello am contacting</div>
          <div className="not-owner">hello am contacting</div>
          <div className="not-owner">hello am contacting</div>
          <div className="not-owner">hello am contacting</div>
          <div className="owner">and am the owner.</div>
          <div className="not-owner">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            nesciunt ullam magni, consequuntur, at accusamus ratione autem
            corrupti aut quibusdam officia labore tempore hic deserunt sint
            iste, nihil nostrum alias.
          </div> */}
        </div>
        <form onSubmit={(e) => sendMessage(e)}>
          <div className="d-flex send-div">
            <input type="text" id="theMessage" className="form-control" />
            <button className="contact-send" type="submit" id="send-button">
              <i className=" far fa-paper-plane" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  return (
    <dialog id="contact-diag" className="border border-warning p-2 rounded-2">
      {user ? messenger : <AuthPage />}
    </dialog>
  );
}
