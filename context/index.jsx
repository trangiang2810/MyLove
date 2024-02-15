"use client";

import React, { createContext, useEffect, useState } from "react";

export const EditorContext = createContext(undefined);
const EditorContextProvider = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [name1, setName1] = useState("nickname1");
  const [name2, setName2] = useState("nickname2");
  const [backgroundColor, setBackgroundColor] = useState("#fff3f5");
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setBackgroundImage(file);
  };
  const handleColorChange = (event) => {
    const color = event.target.value;
    setBackgroundColor(color);
  };

  const handleName1Change = (event) => {
    setValue1(event.target.value);
  };

  const handleName2Change = (event) => {
    setValue2(event.target.value);
  };
  const handleClick = () => {
    if (value1.trim() !== "") {
      setName1(value1);
    }
    if (value2.trim() !== "") {
      setName2(value2);
    }
  };

  const fonts = [
    "Arial",
    "Verdana",
    "Georgia",
    "Times New Roman",
    "Courier New",
    "Tahoma",
    "Garamond",
    "Comic Sans MS",
    "Impact",
    "Lucida Sans Unicode",
    "Palatino Linotype",
    "Trebuchet MS",
    "Arial Black",
    "Arial Narrow",
    "Book Antiqua",
    "Copperplate",
    "Brush Script MT",
  ];
  const [selectedFont, setSelectedFont] = useState("Arial");
  const handleFontChange = (font) => {
    setSelectedFont(font);
  };

  return (
    <EditorContext.Provider
      value={{
        backgroundImage,
        backgroundColor,
        handleImageChange,
        handleColorChange,
        fonts,
        selectedFont,
        handleFontChange,
        handleName1Change,
        handleName2Change,
        name1,
        name2,
        handleClick,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;
