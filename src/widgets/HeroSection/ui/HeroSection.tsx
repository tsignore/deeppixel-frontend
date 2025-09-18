"use client";
import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.scss";
import clsx from "clsx";
import AngrySmileBlackImage from "@/shared/assets/images/angrySmileBlack.svg";
import { Button } from "@/shared/ui/Button/Button";
import Image from "next/image";
import hero1Image from "@/shared/assets/images/hero1.png";
import hero2Image from "@/shared/assets/images/hero2.png";
import hero3Image from "@/shared/assets/images/hero3.png";
import hero4Image from "@/shared/assets/images/hero4.png";
import hero5Image from "@/shared/assets/images/hero5.png";
import hero6Image from "@/shared/assets/images/hero6.png";
import { Container } from "@/shared/ui/Container/Container";
import { WhiteLine } from "@/shared/ui/WhiteLine/WhiteLine";
import Link from "next/link";

export const HeroSection = () => {
  const words = ["Anime", "Animals", "Nature", "Food", "Architecture"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className={clsx(styles.HeroSection)}>
      <Container>
        <div className={styles.HeroSectionContent}>
          {/* <div className={styles.topLine}>
            <p>
              <strong>AI Image Generator:</strong> Create Unique AI Art with
              Free AI Image Generator
            </p>
            <Image src={AngrySmileBlackImage} alt="Angry Smile Icon" />
          </div> */}
          <WhiteLine
            image={<Image src={AngrySmileBlackImage} alt="Angry Smile Icon" />}
          >
            <strong>AI Image Generator:</strong> Create Unique AI Art with Free
            AI Image Generator
          </WhiteLine>
          <h1 className={styles.title}>
            Create <span>images</span> with AI without restrictions
          </h1>
          <p className={styles.text}>
            Generate custom AI images effortlessly with our AI generator free.
            Use the AI art generator tool to create stunning visuals. Try the
            free AI image generator toda
          </p>
          <div className={styles.signup}>
            <div className={styles.left}>
              <span>create/</span>
              <div className={styles.rouletteContainer}>
                {words.map((word, index) => (
                  <p
                    key={word}
                    className={`${styles.spin} ${
                      index === currentIndex ? styles.active : ""
                    }`}
                  >
                    {word}
                  </p>
                ))}
              </div>
            </div>
            <Button rainbow size="medium" className={styles.signupButton}>
              Sign up
            </Button>
          </div>
          <Link href="/" className={styles.login}>
            Do you want to generate an image? <span>Login</span>
          </Link>
        </div>
      </Container>
      <div className={styles.decorations}>
        <Image
          src={hero1Image}
          alt="Decoration 1"
          className={styles.decoration1}
        />
        <Image
          src={hero2Image}
          alt="Decoration 2"
          className={styles.decoration2}
        />
        <Image
          src={hero3Image}
          alt="Decoration 3"
          className={styles.decoration3}
        />
        <Image
          src={hero4Image}
          alt="Decoration 4"
          className={styles.decoration4}
        />
        <Image
          src={hero5Image}
          alt="Decoration 5"
          className={styles.decoration5}
        />
        <Image
          src={hero6Image}
          alt="Decoration 6"
          className={styles.decoration6}
        />
      </div>
    </section>
  );
};
