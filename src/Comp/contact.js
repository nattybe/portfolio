import React, { Component } from "react";
import { Button } from "react-bootstrap";
// import 'sendmail/sendmail'
// import { SMTPClient } from "emailjs";

export default class Contact extends Component {
  render() {
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
    return (
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
            {/* <div className="h3"></div> */}
          </div>
          <div className="messanger-bod">
            <div class="mb-3 mt-1 ms-1 me-1">
              {/* <label for="" class="form-label">
                Email
              </label> */}
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
              {/* <label for="" class="form-label">
                Password
              </label> */}
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
                <Button
                  className="mt-2"
                  // onClick={
                  //   sendmail(
                  //     {
                  //       from: "no-reply@yourdomain.com",
                  //       to: "themanintheomoon@gmail.com",
                  //       subject: "test sendmail",
                  //       html: "Mail of test sendmail ",
                  //     },
                  //     function (err, reply) {
                  //       console.log(err && err.stack);
                  //       console.dir(reply);
                  //     }
                  //   );
                  // }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
