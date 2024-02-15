"use client";

import React, { useState, useEffect, useContext } from "react";
import styles from "./styles.module.scss";
import { BsSuitHeartFill, BsEmojiKiss } from "react-icons/bs";
import { EditorContext } from "@/context";
const Main = ({ selectedItem }) => {
  const { name1, name2, selectedFont, handleFontChange } =
    useContext(EditorContext);
  const [selectedImg1, setSelectedImg1] = useState(null);
  const [selectedImg2, setSelectedImg2] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [loveDays, setLoveDays] = useState(0);
  const [active, setActive] = useState(false);

  const handleImg1Change = (event) => {
    const img = event.target.files[0];
    setSelectedImg1(img);
  };
  const handleImg2Change = (event) => {
    const img = event.target.files[0];
    setSelectedImg2(img);
  };
  const getInitialTime = () => {
    const savedTime = localStorage.getItem("time");
    // const savedDay = localStorage.getItem("loveDays");
    return savedTime
      ? JSON.parse(savedTime)
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [time, setTime] = useState(getInitialTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let seconds = prevTime.seconds;
        let minutes = prevTime.minutes;
        let hours = prevTime.hours;
        let days = prevTime.days;

        seconds++;

        if (seconds >= 60) {
          seconds = 0;
          minutes++;
          if (minutes >= 60) {
            minutes = 0;
            hours++;
            if (hours >= 24) {
              hours = 0;
              days++;
            }
          }
        }
        const currentTime = { days, hours, minutes, seconds };
        localStorage.setItem("time", JSON.stringify(currentTime));
        return currentTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // time
  const handleStartDateChange = (event) => {
    const date = new Date(event.target.value);
    setStartDate(date);
    const today = new Date();
    const timeDiff = today.getTime() - date.getTime();
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    setLoveDays(Math.floor(daysDiff));
  };
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("time", JSON.stringify(time));
      localStorage.setItem("loveDays", JSON.stringify(loveDays));

      // if (selectedImg1) {
      //   localStorage.setItem("selectedImg1", URL.createObjectURL(selectedImg1));
      // }
      // if (selectedImg2) {
      //   localStorage.setItem("selectedImg2", URL.createObjectURL(selectedImg2));
      // }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [time, loveDays, selectedImg1, selectedImg2]);

  useEffect(() => {
    const storedFont = localStorage.getItem("selectedFont");
    if (storedFont && storedFont !== selectedFont) {
      handleFontChange(storedFont);
    }
  }, [selectedFont, handleFontChange]);

  useEffect(() => {
    localStorage.setItem("selectedFont", selectedFont);
  }, [selectedFont]);

  // useEffect(() => {
  //   const savedImg1 = localStorage.getItem("selectedImg1");
  //   if (savedImg1) {
  //     setSelectedImg1(savedImg1);
  //   }

  //   const savedImg2 = localStorage.getItem("selectedImg2");
  //   if (savedImg2) {
  //     setSelectedImg2(savedImg2);
  //   }
  // }, []);

  return (
    <div
      style={{ fontFamily: selectedFont }}
      className={
        selectedItem ? styles.container : `${styles.container} ${styles.width}`
      }
    >
      <div className={styles.title}>
        <span>
          <b>LOVE DAYS</b>
        </span>
      </div>
      <div onClick={() => setActive(!active)} className={styles.count_day}>
        <span className={styles.day}>{loveDays} day</span>
        {/* <span className={styles.day}>{time.days} day</span> */}
        <p className={styles.time}>
          {time.hours < 10 ? "0" + time.hours : time.hours}:
          {time.minutes < 10 ? "0" + time.minutes : time.minutes}:
          {time.seconds < 10 ? "0" + time.seconds : time.seconds}
        </p>
      </div>
      {/* //time */}
      <div
        style={active ? { display: "block" } : { display: "none" }}
        className={styles.wrap_edit_items}
      >
        <div onBlur={() => setActive(false)} className={styles.edit_item}>
          <div className={styles.content}>
            <span>Thay đổi tiêu đề</span>
            <input type="text" placeholder="" />
          </div>
          <div className={styles.content}>
            <span>Chọn ngày bắt đầu</span>
            <input
              type="date"
              value={startDate.toISOString().split("T")[0]}
              onChange={handleStartDateChange}
            />
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <input
            type="file"
            id="myFile"
            name="filename"
            onChange={handleImg1Change}
          />
          {selectedImg1 ? (
            <img src={URL.createObjectURL(selectedImg1)} alt="Selected" />
          ) : (
            <img
              src="https://khasasco.com.vn/wp-content/uploads/2022/05/hinh-chibi-cute-de-ve-1.jpg"
              alt=""
            />
          )}
          <span>{name1}</span>
        </div>
        <div className={styles.iconHeart}>
          <BsSuitHeartFill />
        </div>
        <div className={styles.content}>
          <input
            type="file"
            id="myFile"
            name="filename"
            onChange={handleImg2Change}
          />
          {selectedImg2 ? (
            <img src={URL.createObjectURL(selectedImg2)} alt="Selected" />
          ) : (
            <img
              src="https://i.pinimg.com/originals/27/2c/8a/272c8ac36796b531109ed3e837799ba6.jpg"
              alt=""
            />
          )}
          <span>{name2}</span>
        </div>
      </div>
      <div>
        <audio controls loop src="./yid.mp3">
          <track kind="captions" />
        </audio>
      </div>
      <span>
        Thank you for your love <BsEmojiKiss />
      </span>
    </div>
  );
};

export default Main;
