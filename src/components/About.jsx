import React from "react";
import Nav from "./Nav"; // Import your Nav component
import Footer from "./Footer"; // Import your Footer component
import "../App.css";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

function About() {
  useEffect(() =>{
    window.scrollTo(0,0);
  })
  return (
    <>
    <Helmet>
        <title>About Us - spactour Technology</title>
        <meta
          name="description"
          content="spactour Technology - Your trusted partner for website design, app development, and software solutions in Patna. We specialize in modern, user-friendly websites, innovative apps, and comprehensive IT services to help businesses grow."
        />
      </Helmet>
      <Nav/>
      <div className="about-container">
      <h1>About Spactour </h1>
      <p>
        Welcome to <strong>SpacTour Technology</strong>, a leading website design and development company dedicated to helping businesses establish a strong online presence. Based in the United States, we specialize in crafting high-quality, responsive, and user-friendly websites tailored to meet the unique needs of our clients. With a team of experienced developers, designers, and digital strategists, we bring creativity and technical expertise together to build websites that not only look stunning but also drive business growth.
      </p>
      
      <h2>Our Mission</h2>
      <p>
        Our mission at SpacTour Technology is simple: to empower businesses with top-tier digital solutions. We believe that a well-designed website is more than just an online platform; it’s a powerful tool that enhances brand credibility, improves customer engagement, and boosts conversions. Whether you need a business website, an e-commerce platform, or a custom web solution, we are here to turn your vision into reality.
      </p>
      
      <h2>Why Choose Us?</h2>
      <ul>
        <li><strong>Expertise & Experience:</strong> Our team has years of experience in website development, UI/UX design, and SEO optimization.</li>
        <li><strong>Client-Centric Approach:</strong> We prioritize our clients’ needs and tailor our solutions accordingly.</li>
        <li><strong>Cutting-Edge Technologies:</strong> We utilize the latest frameworks and tools to ensure optimal performance and security.</li>
        <li><strong>SEO & Performance Optimized:</strong> Every website we create is built with SEO best practices to help improve your search engine rankings.</li>
        <li><strong>Affordable & Scalable Solutions:</strong> We offer competitive pricing and scalable solutions to accommodate businesses of all sizes.</li>
      </ul>
      
      <h2>Our Services</h2>
      <p>
        At SpacTour Technology, we offer a wide range of services, including:
      </p>
      <ul>
        <li>Custom Website Design & Development</li>
        <li>E-commerce Website Development</li>
        <li>Mobile App Development</li>
        <li>SEO & Digital Marketing</li>
        <li>UI/UX Design</li>
        <li>Website Maintenance & Support</li>
      </ul>
      
      <h2>Get in Touch</h2>
      <p>
        If you’re looking for a reliable website development partner, we’d love to work with you! Contact us today to discuss your project and take your online presence to the next level.
      </p>
    </div>
      <Footer />
    </>
  );
}

export default About;
