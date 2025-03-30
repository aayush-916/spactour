import React, { useState, useEffect } from 'react';
import styles from './ContactUs.module.css';
import Whatsapp from './Whatsapp';
import Nav from './Nav';
import Footer from './Footer';
import { Helmet } from "react-helmet";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Prepare the message for Telegram
      const telegramMessage = `
        📧 New Contact Form Submission:
        👤 Name: ${name}
        📱 Phone: ${number}
        📩 Email: ${email}
        📝 Message: ${msg || "No additional details provided"}
      `;

      // Send data to your backend server (optional)
      // const response = await fetch('https://backend-spactour.onrender.com/submit', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ name, number, email, msg }),
      // });

      // const serverResponse = await response.json();
      // console.log('Backend Response:', serverResponse);

      // Send data to Telegram Bot
      const telegramResponse = await fetch(`https://api.telegram.org/bot7634903955:AAED40zzZpLRUl7IcsUxNFCtfXSNxZRFlbo/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: 1993338199, // Replace with your actual chat ID
          text: telegramMessage,
        }),
      });

      const telegramData = await telegramResponse.json();

      if (telegramData.ok) {
        alert("Your message was successfully submitted!");
      } else {
        alert("Failed to notify via Telegram.");
      }

      // Clear the form after successful submission
      setName('');
      setNumber('');
      setEmail('');
      setMsg('');

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Helmet>
        <title>Contact - spactour Technology</title>
        <meta
          name="description"
          content="Get in touch with spactour Technology – the best website design and app development company in Patna. Email us at support@spactour.in or call +91 7542019191 for expert IT solutions tailored to your needs."
        />
      </Helmet>
      <Nav />
      <Whatsapp />

      <div className={styles.contact_us_2}>
        <div className={styles["responsive-container-block"] + " " + styles["big-container"]}>
          <div className={styles.blueBG}></div>
          <div className={styles["responsive-container-block"] + " " + styles.container}>
            {/* Contact Info */}
            <div className={styles["contact-info"]}>
              <p className={styles["contact-details"]}>
                <span>Email:</span> <a href="support@spactour.in">support@spactour.in</a>
              </p>
              <p className={styles["contact-details"]}>
                <span>Phone:</span> <a href="tel:+917542019191">+1 9876 765 765</a>
              </p>
            </div>

            {/* Contact Form */}
            <form className={styles["form-box"]} onSubmit={submit}>
              <div className={styles["container-block"] + " " + styles["form-wrapper"]} id="contact">
                <p className={styles["text-blk"] + " " + styles["contactus-head"]}>Contact Us</p>

                <div className={styles["responsive-container-block"]}>
                  {/* Form Fields */}
                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]} ${styles["wk-desk-6"]}`}>
                    <p className={styles["text-blk"] + " " + styles["input-title"]}>NAME</p>
                    <input
                      className={styles.input}
                      name="FirstName"
                      placeholder="Please enter first name..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-desk-6"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]}`}>
                    <p className={styles["text-blk"] + " " + styles["input-title"]}>EMAIL</p>
                    <input
                      className={styles.input}
                      name="Email"
                      placeholder="Please enter email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-desk-6"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]}`}>
                    <p className={styles["text-blk"] + " " + styles["input-title"]}>PHONE NUMBER</p>
                    <input
                      className={styles.input}
                      name="PhoneNumber"
                      placeholder="Please enter phone number..."
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]} ${styles["wk-desk-12"]} ${styles["wk-ipadp-12"]}`}>
                    <p className={styles["text-blk"] + " " + styles["input-title"]}> REQUIREMENT</p>
                    <textarea
                      className={styles.textinput}
                      placeholder="Please enter your requirement...(Optional)"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                {loading ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <button type="submit" className={styles["submit-btn"]}>Submit</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
