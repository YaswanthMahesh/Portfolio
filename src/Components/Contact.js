import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";

const Contact = () => {
  const form = useRef();
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [errMsg, setErrorMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_3ngtf8x",
        "template_x2ozdep",
        form.current,
        "wKXVLYDM7widk3PzZ"
      )
      .then(
        (result) => {
          setSuccessModalOpen(true);
          setIsLoading(false);
          setErrorMessage(null);
          form.current.reset();
        },
        (error) => {
          setIsLoading(false);
          setErrorMessage("Unable to send Message please try again after some time.")
          console.log(error.text);
        }
      );
  };


  const validateForm = () => {
    const name = form.current.from_name.value;
    const email = form.current.from_email.value;
    const message = form.current.message.value;

    if (!name.trim()) {
      setErrorMessage("Name is required.");
      return false;
    }

    if (!email.trim()) {
      setErrorMessage("Email is required.");
      return false;
    } else if (!isValidEmail(email)) {
      setErrorMessage("Invalid email format.");
      return false;
    }

    if (!message.trim()) {
      setErrorMessage("Message is required.");
      return false;
    }

    return true;
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
  };
  return (
    <>
    <section id="contact" className="mb-16 pt-14">
      <div className="text-center mb-10">
                <h1 className="font-bold text-4xl">CONTACT</h1>
                <div className="w-[60%] m-auto text-xl break-words opacity-80 text-center">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</div>
            </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white mx-auto p-4 rounded-md shadow-md lg:w-[70%] flex flex-col items-start"
      >
        <label htmlFor="from_name" className="text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          name="from_name"
          placeholder="Enter your Name"
          className="w-full mt-1 p-2 border rounded-md focus:outline-none"
        />

        <label htmlFor="from_email" className="text-sm font-medium mb-2 mt-4">
          Email
        </label>
        <input
          type="email"
          name="from_email"
          placeholder="Enter your Email"
          className="w-full mt-1 p-2 border rounded-md focus:outline-none"
        />

        <label
          htmlFor="message"
          className="w-full text-sm font-medium mb-2 mt-4"
        >
          Message
        </label>
        <textarea
          name="message"
          placeholder="Enter your Message"
          className="w-full mt-1 p-2 border rounded-md focus:outline-none"
        ></textarea>
        <p className="text-red-800 mt-2">{errMsg}</p>

        <input
          type="submit"
          value={isLoading?"Sending...":"Send"}
          disabled={isLoading?true:false}
          className="mt-4 py-2 px-6 bg-gray-700 text-white rounded-md self-end cursor-pointer"
        />
      </form>
    </section>
    <Modal isOpen={isSuccessModalOpen} onClose={closeSuccessModal}>
        <h2 className="text-2xl mb-4">Your Message Has Been Successfully Sent</h2>
  <p className="text-gray-600">
    Thank you for reaching out. I appreciate your message and will get back to you as soon as possible.
  </p>
        </Modal>
    </>
  );
};

export default Contact;
