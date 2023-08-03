import React from "react";
import styles from "./index.module.css";

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
        background: props.style?.background,
      }}
    >
      <div
        {...props}
        className={(props.className || "") + styles.container}
        style={{
          background: "transparent",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
