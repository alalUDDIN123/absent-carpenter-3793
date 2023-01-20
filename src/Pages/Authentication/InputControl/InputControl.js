import { Input } from "@chakra-ui/react";
import React from "react";

import styles from "./InputControl.module.css";

function InputControl(props) {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
      <Input type="text" {...props} variant='flushed' />
    </div>
  );
}

export default InputControl;
