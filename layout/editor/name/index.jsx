import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { EditorContext } from "@/context";

const Name = () => {
  const { handleName1Change, handleName2Change, handleClick } =
    useContext(EditorContext);

  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Thay đổi tên</h5>
      <div>
        <div>
          <span>Nickname1</span>
          <input type="text" onChange={handleName1Change} />
        </div>
        <div>
          <span>Nickname2</span>
          <input type="text" onChange={handleName2Change} />
        </div>
        <button className={styles.btn} onClick={handleClick}>Thay đổi</button>
      </div>
    </div>
  );
};

export default Name;
