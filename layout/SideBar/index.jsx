"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { BiText, BiRename } from "react-icons/bi";
import { PiSelectionBackgroundDuotone } from "react-icons/pi";
const SideBar = ({ handleClick, selectedItem }) => {
  const handleItemClick = (index) => {
    if (selectedItem === index) {
      handleClick(null);
    } else {
      handleClick(index);
    }
  };

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        <li
          onClick={() => handleItemClick(1)}
          className={`${styles.item} ${
            selectedItem === 1 ? styles.selected : ""
          }`}
        >
          <span className={styles.icon}>
            <PiSelectionBackgroundDuotone />
          </span>
          <span>Hình nền</span>
        </li>
        <li
          onClick={() => handleItemClick(2)}
          className={`${styles.item} ${
            selectedItem === 2 ? styles.selected : ""
          }`}
        >
          <span className={styles.icon}>
            <BiText />
          </span>
          <span>Font chữ</span>
        </li>
        <li
          onClick={() => handleItemClick(3)}
          className={`${styles.item} ${
            selectedItem === 3 ? styles.selected : ""
          }`}
        >
          <span className={styles.icon}>
            <BiRename />
          </span>
          <span>nickname1</span>
        </li>
        <li
          onClick={() => handleItemClick(4)}
          className={`${styles.item} ${
            selectedItem === 4 ? styles.selected : ""
          }`}
        >
          <span className={styles.icon}>
            <BiRename />
          </span>
          <span>nickname2</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
