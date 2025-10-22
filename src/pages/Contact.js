import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage(""); 

    const formData = new FormData(event.target);
    formData.append("access_key", "438cf1c1-dfc6-422e-8e0f-e6b549097a9c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        window.alert(" Message sent successfully!");
        event.target.reset(); 
      } else {
        setMessage(" Error sending message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage(" Network error. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={onSubmit} className="contact-form">
        <label>Name:</label>
        <input type="text" name="name" placeholder="Name" required />

        <label>Email:</label>
        <input type="email" name="email" placeholder="Email" required />

        <label>Message:</label>
        <textarea name="message" placeholder="Message" required />

        <button type="submit">Submit Form</button>
      </form>

      {message && <p className="form-message">{message}</p>}
    </div>
  );
}

export default Contact;