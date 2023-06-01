import { FC, ReactNode } from "react";

import styles from "./Button.module.css";

type CustomProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success";
};

type ButtonProps = CustomProps & JSX.IntrinsicElements["button"];

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`${styles.btn} ${props.disabled ? styles.disabled : ""} ${
        styles[variant]
      } ${className ? className : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
