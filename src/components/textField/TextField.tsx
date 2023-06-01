import React, { FC } from "react";

import styles from "./TextField.module.css";

type TextFieldProps = {
  error?: string;
  touched?: boolean;
};

const TextField: FC<TextFieldProps & JSX.IntrinsicElements["input"]> = ({
  error,
  touched,
  ...props
}) => {
  return (
    <div
      style={{ position: "relative", height: 48, width: "100%" }}
      className={error && touched ? styles.invalid : ""}
    >
      <input style={{ width: "100%", height: "100%" }} {...props} />
      {error && touched ? (
        <div className={styles["error-info"]}>{error}</div>
      ) : null}
    </div>
  );
};

export default TextField;