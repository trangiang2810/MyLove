"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import Background from "./background";
import Font from "./font";
import Name from "./name";

const Editor = ({ selectedItem }) => {
  let selectedEditor;
  switch (selectedItem) {
    case 1:
      selectedEditor = <Background />;
      break;
    case 2:
      selectedEditor = <Font />;
      break;
    case 3:
      selectedEditor = <Name />;
      break;
  }

  return (
    <>
      {selectedItem ? (
        <div className={styles.container}>{selectedEditor}</div>
      ) : (
        ""
      )}
    </>
  );
};

export default Editor;
