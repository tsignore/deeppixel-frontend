import React from "react";
import styles from "./ArcOfImages.module.scss";
import clsx from "clsx";
import image1 from "@/shared/assets/images/arc/image1.png";
import image2 from "@/shared/assets/images/arc/image2.png";
import image3 from "@/shared/assets/images/arc/image3.png";
import image4 from "@/shared/assets/images/arc/image4.png";
import image5 from "@/shared/assets/images/arc/image5.png";
import image6 from "@/shared/assets/images/arc/image6.png";
import image7 from "@/shared/assets/images/arc/image7.png";
import Image from "next/image";
import { Container } from "@/shared/ui/Container/Container";
import { WhiteLine } from "@/shared/ui/WhiteLine/WhiteLine";

interface ArcOfImagesProps {
  className?: string;
}

export const ArcOfImages: React.FC<ArcOfImagesProps> = ({ className }) => {
  return (
    <section className={clsx(styles.ArcOfImages, className)}>
      <Container>
        <div className={styles.innerArcOfImages}>
          <Image
            src={image1}
            alt="Generated image 1"
            className={styles.image1}
          />
          <Image
            src={image2}
            alt="Generated image 2"
            className={styles.image2}
          />
          <Image
            src={image3}
            alt="Generated image 3"
            className={styles.image3}
          />
          <Image
            src={image4}
            alt="Generated image 4"
            className={styles.image4}
          />
          <Image
            src={image5}
            alt="Generated image 5"
            className={styles.image5}
          />
          <Image
            src={image6}
            alt="Generated image 6"
            className={styles.image6}
          />
          <Image
            src={image7}
            alt="Generated image 7"
            className={styles.image7}
          />
        </div>
      </Container>
    </section>
  );
};
