import React from "react";
import styles from "./HowAiWorks.module.scss";
import clsx from "clsx";
import { WhiteLine } from "@/shared/ui/WhiteLine/WhiteLine";
import { Button } from "@/shared/ui/Button/Button";
import { Container } from "@/shared/ui/Container/Container";

interface HowAiWorksProps {
  className?: string;
}

export const HowAiWorks: React.FC<HowAiWorksProps> = ({ className }) => {
  return (
    <section className={clsx(styles.HowAiWorks, className)}>
      <Container>
        <div className={styles.innerHowAiWorks}>
          <WhiteLine className={styles.whiteLine}>
            Realistic AI Image Generator: Create Photorealistic Images with AI
          </WhiteLine>
          <h2 className={styles.title}>
            How AI image generator free no <span>sign up works</span>
          </h2>
          <div className={styles.blocks}>
            <div className={styles.blocksItem}>
              <h3>01</h3>
              <p>Enter a text description of the desired image</p>
            </div>
            <div className={styles.blocksItem}>
              <h3>02</h3>
              <p>Select a style, for example, Ghibli</p>
            </div>
            <div className={styles.blocksItem}>
              <h3>03</h3>
              <p>Click &quot;Generate&quot; and get a ready image in seconds</p>
            </div>
            <div className={styles.blocksItem}>
              <h3>04</h3>
              <p>
                Start creating stunning images right now with AI Image
                Generator! Enjoy the freedom of creativity without restrictions
                and registrations.
              </p>
            </div>
          </div>
          <Button rainbow className={styles.button}>
            Generate image now
          </Button>
          <p className={styles.text}>
            Generate lifelike portraits and stunning visuals with the most
            realistic AI image generator. Try the realism AI generator free and
            bring your ideas to life with photorealistic quality.
          </p>
        </div>
      </Container>
    </section>
  );
};
