"use client";
import Waves from "@/components/waves";
import styles from "./page.module.css";
import SideBar from "@/layout/SideBar";
import Main from "@/components/Main";
import Editor from "@/layout/editor";
import { TiHeart } from "react-icons/ti";
import { useState, useEffect, useContext } from "react";
import { EditorContext } from "@/context";
export default function Home() {
  const { backgroundColor, backgroundImage } = useContext(EditorContext);

  const [hearts, setHearts] = useState([]);

  const heartDistance = 6;

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const newHeart = {
      id: Date.now(),
      x: clientX,
      y: clientY,
      opacity: 1,
    };

    // Kiểm tra khoảng cách giữa trái tim mới và các trái tim đã có
    const isFarEnough = hearts.every(
      (heart) =>
        Math.abs(heart.x - clientX) > heartDistance ||
        Math.abs(heart.y - clientY) > heartDistance
    );

    // Chỉ thêm trái tim mới nếu khoảng cách đủ xa
    if (isFarEnough) {
      setHearts((prevHearts) => [...prevHearts, newHeart]);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prevHearts) => {
        const updatedHearts = prevHearts
          .map((heart) => ({
            ...heart,
            opacity: heart.opacity - 0.08,
          }))
          .filter((heart) => heart.opacity > 0);
        return updatedHearts;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const [selectedItem, setSelectedItem] = useState(null);
  const handleClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div
      className={styles.haha}
      style={{
        backgroundColor: backgroundColor,

        // backgroundImage: backgroundImage
        //   ? `url(${URL.createObjectURL(backgroundImage)})`
        //   : "none",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <div onMouseMove={handleMouseMove}>
        {hearts.map((heart, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: heart.x - 10,
              top: heart.y - 10,
              opacity: heart.opacity,
              transition: "opacity 0.1s",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            <TiHeart color="#ff506d" size={10} />
          </div>
        ))}
        <div className={styles.item}>
          <SideBar handleClick={handleClick} selectedItem={selectedItem} />
          <Editor selectedItem={selectedItem} />
          <Main selectedItem={selectedItem} />
        </div>
        <Waves />
      </div>
    </div>
  );
}
