import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { EditorContext } from "@/context";
const Font = () => {
  const { fonts, handleFontChange, selectedFont } = useContext(EditorContext);
  return (
    <div>
      <h5 className={styles.title}>Font chữ</h5>
      <ul className={styles.wrap}>
        {fonts.map((font, index) => (
          <li
            className={selectedFont === font ? styles.selectedFont : ""}
            style={{ fontFamily: font }}
            key={index}
            onClick={() => handleFontChange(font)}
          >
            {font}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Font;
