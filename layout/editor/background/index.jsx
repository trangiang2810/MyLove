"use client";

import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { EditorContext } from "@/context";
const Background = () => {
  const { handleColorChange, handleImageChange, backgroundColor } =
    useContext(EditorContext);
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [backgroundColor, setBackgroundColor] = useState("#fff");

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedFile(file);
  //   console.log(selectedFile);
  // };
  // const handleColorChange = (event) => {
  //   const color = event.target.value;
  //   setBackgroundColor(color);
  //   console.log(backgroundColor);
  // };
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Đổi hình nền</h5>
      <div>
        <input
          type="file"
          id="myFile"
          name="filename"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div className={styles.item}>
        <span>Chọn màu săc</span>
        <input type="color" onChange={handleColorChange} />
      </div>
      {/* {selectedFile && (
        <div className={styles.img}>
          <img src={URL.createObjectURL(selectedFile)} alt="Selected" />
        </div>
      )} */}
    </div>
  );
};

export default Background;
