import { FC, ButtonHTMLAttributes, ReactNode, memo } from "react";
import cls from "./Button.module.scss";
import clsx from "clsx";

export type ButtonVariant = "clear" | "outlined" | "filled";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonColor = "primary" | "secondary" | "basic";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children: ReactNode;
  color?: ButtonColor;
  textColor?: string;
  rainbow?: boolean;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    variant = "clear",
    size = "medium",
    children,
    disabled,
    color = "basic",
    textColor,
    rainbow,
    ...otherProps
  } = props;
  return (
    <button
      className={clsx(
        cls.button,
        { [cls.disabled]: disabled, [cls.rainbow]: rainbow },
        [cls[variant], cls[size], cls[color]],
        className
      )}
      style={{ color: textColor }}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
