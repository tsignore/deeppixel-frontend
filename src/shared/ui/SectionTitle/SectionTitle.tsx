import React, { ReactNode } from "react";
import styles from "./SectionTitle.module.scss";
import clsx from "clsx";

interface SectionTitleProps {
  className?: string;
  children: ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  className,
  children,
}) => {
  return <h2 className={clsx(styles.SectionTitle, className)}>{children}</h2>;
};
