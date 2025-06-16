import { RiSendPlaneFill } from "react-icons/ri";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import InputField from "../common/components/InputField/InputField";
import TextAreaField from "../common/components/TextAreaField/TextAreaField";
import SubmitButton from "../common/components/SubmitButton/SubmitButton";
import Loader from "../common/components/Loader/Loader";

// import style
import style from "./App.module.css";
import clsx from "clsx";

const Contact = ({ loading, setLoading }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_n3hfu6t",
        "template_9gv38h4",
        form.current,
        "kR9GHs6DJgr_4qFVX"
      )
      .then((result) => {
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.message.value = "";

        setTimeout(() => {
          setLoading(false);
          toast.success("Message sent successfully! 🚀");
        }, 1000);
      })
      .catch((error) => {
        console.error("Email sending error:", error.text);
        setLoading(false);
        toast.error("Failed to send message. Please try again. ❌");
      });
  };

  return (
    <>
      <div id="Contact" className={style.contact}>
        <div className={style.container}>
          <h2 className={style.title}>Contact</h2>
          <p>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={clsx({ [style["inactive-form"]]: loading })}
          >
            <InputField
              width="700px"
              height="40px"
              name="name"
              placeholder="Enter Your Name"
              label="Name"
              type="text"
            />
            <InputField
              width="700px"
              height="40px"
              name="email"
              placeholder="Enter Your Email"
              label="Email"
              type="email"
            />
            <TextAreaField
              width="700px"
              height="225px"
              name="message"
              placeholder="Enter Your Message"
              label="Message"
              type="text"
            />
            <SubmitButton
              icon={<RiSendPlaneFill size="20px" color="white" />}
              width="200px"
              height="60px"
              color="white"
              backgroundColor="var(--primary-main)"
            >
              Submit
            </SubmitButton>
            {loading && (
              <div className={style.loader}>
                <Loader />
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
