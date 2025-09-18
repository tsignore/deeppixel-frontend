import clsx from "clsx";
import React from "react";
import styles from "./WhiteLine.module.scss";

interface WhiteLineProps {
  className?: string;
  image?: React.ReactNode;
  children?: React.ReactNode;
}

export const WhiteLine: React.FC<WhiteLineProps> = ({
  className,
  image,
  children,
}) => {
  return (
    <div className={clsx(styles.WhiteLine, className)}>
      <p>{children}</p>
      {image}
    </div>
  );
};
