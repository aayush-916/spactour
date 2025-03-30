import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from './Home.module.css';

function Home() {
  return (
    <>
     <div style={{ overflow: "visible" }}>
      <motion.div
        className={styles.main}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
      >
        <div className={styles.tx}>
          <h1>
            Web & App Development Company in
            <ReactTypingEffect
              text={["USA ", "UK ",]}
              speed={300} // Typing speed of each character
              eraseSpeed={100} // Erase speed of each character
              typingDelay={200} // Delay before typing each word
              eraseDelay={1200} // Delay before erasing each word
              className={styles.type}
            />
          </h1>
          <p>Making Dreams a Reality</p>
          <article className={styles.longar}>
          We build user-friendly websites designed to boost engagement and increase conversions. Our affordable, high-quality web design services help strengthen your digital marketing efforts. Whether you're a small startup or a growing business, our web development and marketing expertise can help you expand and succeed online.
          </article>
          <article className={styles.shortar}>
          Boost engagement and conversions with our user-friendly, high-quality web design services. We provide affordable and effective website solutions to help businesses grow.
          </article>
          <Link to="/contact">
            <button className={styles["button-85"]}>Contact Us ➜</button>
          </Link>
        </div>

        <div className={styles.gif}>
          <img src="./im2.gif" alt="Animation"/>
        </div>
      </motion.div>
      </div>
    </>
  );
}

export default Home;
