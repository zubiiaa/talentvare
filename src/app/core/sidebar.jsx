import React from "react";
import Calendar from "../components/calendar";
import UserProfile from "../components/user-profile";
import "./core.scss";

const Sidebar = ({ user, stats, interviews }) => {
  return (
    <aside className="sidebar pt-4 mr-4 ml-7">
      {/* Profile Section */}
      <UserProfile user={user} />

      {/* Stats Section */}
      <div className="stats-section mt-3 px-4 py-3">
        <div className="stat-item flex justify-content-between">
          <span className="primary-text-black f-16 fw-4">Profile Visitors</span>
          <span className="primary-blue f-16 fw-4">
            {stats.profileVisitors}
          </span>
        </div>
        <div className="stat-item flex justify-content-between">
          <span className="primary-text-black f-16 fw-4">Resume Viewers</span>
          <span className="primary-blue f-16 fw-4">{stats.resumeViewers}</span>
        </div>
        <div className="stat-item flex justify-content-between">
          <span className="primary-text-black f-16 fw-4">My Jobs</span>
          <span className="primary-blue f-16 fw-4">{stats.myJobs}</span>
        </div>
      </div>

      {/* Calendar Section */}
      <Calendar interviews={interviews} />
    </aside>
  );
};

export default Sidebar;