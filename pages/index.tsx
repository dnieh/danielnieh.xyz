import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import test from "node:test";

const myName = "Daniel Nieh";
const greetings = [
  `Hi! I'm ${myName}.`,
  `👋, I'm ${myName}.`,
  `🖖, I'm ${myName}.`,
  `你好.我是${myName}.`,
  `こんにちは！わたしは${myName}です。よろしく お願いします。`,
];

const Home: NextPage = () => {
  const [welcomeMessage, setWelcomeMessage] = useState<string>("");

  useEffect(() => {
    const random = Math.floor(Math.random() * greetings.length);
    setWelcomeMessage(greetings[random]);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>danielnieh.xyz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.landingCard}>
          <div className={styles.title}>
            <h1>{welcomeMessage}</h1>
          </div>
          <div className={styles.landingBody}>
            <div className={styles.intro}>
              <p>
                I'm a SF Bay Area based software engineer + engineering manager.
                I have a lovely wife and two adorable daughters. When I'm not
                with my family or tinkering on something, I'm usually surfing or
                watering my plants.
              </p>
            </div>
            <div className={styles.directory}>
              <a
                href="https://www.linkedin.com/in/daniel-nieh-90602a4b/"
                target="_blank"
                rel="noreferrer"
              >
                Work
              </a>
              <a className={styles.disabled}>Projects</a>
              <a
                href="https://github.com/dnieh"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
              <a className={styles.disabled}>Blog</a>
              <a className={styles.disabled}>Gallery</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
