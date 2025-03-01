"use client";

import React, { useState } from "react";
import "./components.scss";

const Calendar = ({ interviews }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    // Panel Section
    <div className="calendar-section mt-3 px-3 pt-3">
      <div
        className="flex justify-content-between align-items-center cursor-pointer"
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
      >
        <div>
          <p className="f-16 fw-5 m-0">My Calendar</p>
          <p className="f-14 grey mt-1">Upcoming Interviews </p>
        </div>
        <i
          className={`pi ${
            isCalendarOpen ? "pi-chevron-up" : "pi-chevron-down"
          } mb-3`}
        />
      </div>

      {/* Interview Listing Section */}
      {isCalendarOpen && (
        <div className="mt-1 pb-2">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              className="interview-card flex align-items-center my-2 py-2"
            >
              <img
                src={interview.logo}
                alt={interview.company}
                className="m-2"
                height="30"
              />
              <div className="interview-info">
                <p className="fw-5 m-1">{interview.position}</p>
                <p className="f-14 grey m-1">{interview.company}</p>
                <p className="f-14 grey m-1">
                  {interview.date} | {interview.time} |{" "}
                  {interview.remote ? "Remote" : "On-site"}
                </p>
              </div>
              <div className="interview-actions flex align-items-center">
                <button className="accept-btn brd-n cursor-pointer">
                  Accepted
                </button>
                <button className="deny-btn brd-n cursor-pointer">Deny</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Calendar;