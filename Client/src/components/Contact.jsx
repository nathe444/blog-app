import React, { useState } from "react";
import "../css/Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult("Please wait...");

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "cd6dea4e-a281-49a3-bd8e-90d75dffb07b",
        ...formData,
      }),
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status === 200) {
          setResult(json.message);
        } else {
          setResult(json.message);
        }
      })
      .catch((error) => {
        setResult("Something went wrong!");
      })
      .finally(() => {
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setResult("");
        }, 3000);
      });
  };

  return (
    <div className="container">
      <div className="contact-section">
        <div
          className="contact-info"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div>
            <i className="fas fa-map-marker-alt"></i>AA, Ethiopia
          </div>
          <div>
            <i className="fas fa-envelope"></i>natnaelmulugeta1116@gmail.com
          </div>
          <div>
            <i className="fas fa-phone"></i>+251 993 944 704
          </div>
          <div>
            <i className="fas fa-clock"></i>Mon - Fri 9:00 AM to 4:00 PM
          </div>
        </div>
        <div
          className="contact-form"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="access_key"
              value="cd6dea4e-a281-49a3-bd8e-90d75dffb07b"
            />
            <input
              type="text"
              name="name"
              className="text-box"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="text-box"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <input type="submit" className="send-btn" value="Send" />
            <div id="result">{result}</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
