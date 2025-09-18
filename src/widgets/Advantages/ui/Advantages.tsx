import React from "react";
import styles from "./Advantages.module.scss";
import PinkCircleImage from "@/shared/assets/images/pinkCircle.png";
import XmarkImage from "@/shared/assets/images/xmark.svg";
import Image from "next/image";
import { Container } from "@/shared/ui/Container/Container";
import clsx from "clsx";
import { Button } from "@/shared/ui/Button/Button";
//
import hero1Image from "@/shared/assets/images/hero1.png";
import hero2Image from "@/shared/assets/images/hero2.png";
import hero3Image from "@/shared/assets/images/hero3.png";
import hero4Image from "@/shared/assets/images/hero4.png";
import hero5Image from "@/shared/assets/images/hero5.png";
import hero6Image from "@/shared/assets/images/hero6.png";
//

interface AdvantagesProps {
  className?: string;
}

export const Advantages: React.FC<AdvantagesProps> = ({ className }) => {
  return (
    <Container>
      <div className={clsx(styles.Advantages, className)}>
        <div className={styles.innerAdvantages}>
          <div className={styles.advantagesTop}>
            <Image
              className={styles.pinkCircleImage}
              src={PinkCircleImage}
              alt="Advantages image"
            />
            <div>
              <h2 className={styles.title}>
                Advantages of image AI generator free:
              </h2>
              <p className={styles.text}>
                Discover the possibilities of AI Image Generator! This tool
                allows you to create images in various styles, including the
                famous Ghibli style, without the need to register and absolutely
                free.
              </p>
            </div>
          </div>
          <div className={styles.layout}>
            <div className={clsx(styles.item, styles.item1)}>
              <Image src={hero1Image} alt="Example Ai Image 1" />
            </div>
            <div className={clsx(styles.item, styles.item2)}>
              <Image src={hero3Image} alt="Example Ai Image 2" />
            </div>
            <div className={clsx(styles.item, styles.item3)}>
              <Image src={hero2Image} alt="Example Ai Image 3" />
            </div>
            <div className={clsx(styles.item, styles.item4)}>
              <Image src={hero4Image} alt="Example Ai Image 4" />
            </div>
            <div className={clsx(styles.item, styles.item5)}>
              <Image src={hero5Image} alt="Example Ai Image 5" />
            </div>
            <div className={clsx(styles.item, styles.item6)}>
              <Image src={hero6Image} alt="Example Ai Image 6" />
            </div>
          </div>
          <div className={styles.advantagesBottom}>
            <div className={styles.left}>
              <p>Tags</p>
              <ul className={styles.tags}>
                <li>
                  Woman
                  <Image src={XmarkImage} alt="Close Image" />
                </li>
                <li>
                  18s
                  <Image src={XmarkImage} alt="Close Image" />
                </li>
                <li>
                  Olied
                  <Image src={XmarkImage} alt="Close Image" />
                </li>
              </ul>
            </div>
            <div className={styles.right}>
              <Button className={styles.button}>Reset session</Button>
              <Button rainbow className={styles.button}>
                Generate image
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
