import clsx from "clsx";
import React from "react";
import styles from "./Smiles.module.scss";
import { Container } from "@/shared/ui/Container/Container";
import BlueSmile from "@/shared/assets/images/blueSmile.svg";
import OrangeSmile from "@/shared/assets/images/orangeSmile.svg";
import PinkSmile from "@/shared/assets/images/pinkSmile.svg";
import GreenSmile from "@/shared/assets/images/greenSmile.svg";
import Image from "next/image";

interface SmilesProps {
  className?: string;
}

export const Smiles: React.FC<SmilesProps> = ({ className }) => {
  return (
    <section className={clsx(styles.Smiles, className)}>
      <Container>
        <div className={styles.innerSmiles}>
          <div className={styles.smilesBlock}>
            <Image src={BlueSmile} alt="Blue Smile" />
            <h3>Variety of styles</h3>
            <p>
              Generate images in various styles, including Ghibli AI image
              generator.
            </p>
          </div>
          <div className={styles.smilesBlock}>
            <Image src={OrangeSmile} alt="Blue Smile" />
            <h3>Free access</h3>
            <p>Use free AI image generator without registration.</p>
          </div>
          <div className={styles.smilesBlock}>
            <Image src={PinkSmile} alt="Blue Smile" />
            <h3>No restrictions</h3>
            <p>
              AI image generator no restrictions allows you to create images
              without restrictions on quantity and style.
            </p>
          </div>
          <div className={styles.smilesBlock}>
            <Image src={GreenSmile} alt="Blue Smile" />
            <h3>High quality and ease of use</h3>
            <p>
              Best AI image generator provides high quality images with a simple
              and clear interface.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
