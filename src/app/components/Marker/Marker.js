import React from "react";
import Image from "next/image";
import styles from "@/app/components/Marker/Marker.module.css";

const Marker = () => {
  return (
    <div className={styles["div"]}>
      <Image
        src='/imgs/piano.svg'
        alt='Piano Marker'
        width={100}
        height={100}
        className={styles["img"]}
      />
    </div>
  );
};

export default Marker;
