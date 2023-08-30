import React from "react";
import styles from "@/styles/ui/button/button.module.css";

export const ButtonPcBuilder = ({text}) => {
  return (
    <button className={styles.builder}>{text ? text : "PC Builder"}</button>
  );
};
