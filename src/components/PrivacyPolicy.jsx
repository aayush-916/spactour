import React from "react";
import "../App.css";
import Footer from "./Footer";
import Nav from "./Nav";
import { useEffect } from "react";

const PrivacyPolicy = () => {
    useEffect(() =>{
        window.scrollTo(0,0);
      })
  return (
    <>
    <Nav/>
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>Last Updated: March 30, 2025</p>
      
      <section>
        <h2>1. Introduction</h2>
        <p>Welcome to LeafCode Technology. Your privacy is important to us, and we are committed to protecting the personal information you share with us.</p>
      </section>
      
      <section>
        <h2>2. Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, phone number, and project details when you interact with our website.</p>
      </section>
      
      <section>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To provide our web development services.</li>
          <li>To communicate with you regarding inquiries and projects.</li>
          <li>To improve our website and services based on user feedback.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </section>
      
      <section>
        <h2>4. Cookies and Tracking Technologies</h2>
        <p>We use cookies to enhance user experience. By using our site, you agree to our use of cookies as described in our Cookie Policy.</p>
      </section>
      
      <section>
        <h2>5. Third-Party Services</h2>
        <p>We may use third-party services such as Google Analytics to understand website traffic. These services may collect data as per their policies.</p>
      </section>
      
      <section>
        <h2>6. Data Security</h2>
        <p>We implement security measures to protect your data, but we cannot guarantee 100% security over the internet.</p>
      </section>
      
      <section>
        <h2>7. Your Rights</h2>
        <p>You have the right to access, modify, or delete your personal data. Contact us if you need assistance.</p>
      </section>
      
      <section>
        <h2>8. Contact Information</h2>
        <p>If you have any questions about our Privacy Policy, please contact us at: <br/>
        <strong>Email:</strong> support@s.com <br/>
        <strong>Phone:</strong> +1 XXXXXXXXXX</p>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
