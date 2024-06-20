import React, { useState, useEffect } from "react";
import "./clock.css";

function Clock() {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [year, setYear] = useState();
  const [hours, setHour] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [days, setDays] = useState();
  const [months, setMonths] = useState();
  const [monthDates, setMonthDate] = useState();
  const [session, setSession] = useState("PM");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      let day = date.getDay();
      let month = date.getMonth();
      let monthDate = date.getDate();
      let year = date.getFullYear();

      setSession(hour >= 12 ? "PM" : "AM");

      // Convert 24-hour format to 12-hour format
      hour = hour % 12;
      hour = hour ? hour : 12; // the hour '0' should be '12'

      setHour(hour < 10 ? "0" + hour : hour);
      setMinutes(minute < 10 ? "0" + minute : minute);
      setSeconds(second < 10 ? "0" + second : second);
      setDays(day);
      setMonths(month);
      setMonthDate(monthDate);
      setYear(year);
    };

    // Update the time immediately on mount
    updateTime();

    // Set interval to update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const daay = dayList[days];
  const monthh = monthList[months];

  return (
    <div className="container">
      <div className="hourContainer">
        <div className="hours">{hours + ":"}</div>
        <div className="minutes">{minutes + ":"}</div>
        <div className="seconds">{seconds}</div>
        <p className="session">{session}</p>
      </div>
      <p className="year">
        {daay}, {monthh} {monthDates} {year}
      </p>
    </div>
  );
}

export default Clock;
