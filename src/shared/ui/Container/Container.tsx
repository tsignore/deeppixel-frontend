import { FC, ReactNode } from "react";
import clsx from "clsx";
import cls from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: string;
}

export const Container: FC<ContainerProps> = ({
  children,
  className,
  maxWidth,
}) => {
  return (
    <div
      className={clsx(cls.Container, className)}
      style={{ maxWidth: maxWidth }}
    >
      {children}
    </div>
  );
};