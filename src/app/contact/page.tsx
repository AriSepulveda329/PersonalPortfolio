"use client";

import React, { useRef, useState } from "react";
import Alert from "@/components/Alert.jsx";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ErrorIcon from "@mui/icons-material/Error";
import emailjs from "@emailjs/browser";
import "@/styles/Contact.css";

function Contact() {
  const [displaySuccessAlert, setDisplaySuccessAlert] = useState("hide");
  const [displayErrorAlert, setDisplayErrorAlert] = useState("hide");
  const form = useRef<any>();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f9iae03", "template_gt8ol6k", form.current, {
        publicKey: "TcRfeBrBUCd7GjXZZ",
      })
      .then(
        () => {
          setDisplaySuccessAlert("show");
          console.log("SUCCESS!");
        },
        (error) => {
          setDisplayErrorAlert("show");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contactPage">
      <Alert
        alertIcon={<CheckCircleIcon />}
        type="success"
        text="Message sent successfully"
        displayClass={displaySuccessAlert}
        setDisplayClass={setDisplaySuccessAlert}
      />
      <Alert
        alertIcon={<ErrorIcon />}
        type="error"
        text="There was an issue sending this message"
        displayClass={displayErrorAlert}
        setDisplayClass={setDisplayErrorAlert}
      />
      <div className="leftSide">
        <h1>Contact me!</h1>
        <p className="labels">Email</p>
        <p>alonso.ari.329@gmail.com</p>
        <p className="labels">Social networks</p>
        <a href="https://www.instagram.com/alonso329">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/arisepulveda329/">
          <LinkedInIcon />
        </a>
      </div>
      <div className="rightSide">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="user_name" required />
          <input type="email" placeholder="Email" name="user_email" required />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit" value="Send">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
