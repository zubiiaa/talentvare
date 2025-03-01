import React from "react";
import { Button } from "primereact/button";
import Sidebar from "../core/sidebar";
import PageHeader from "../components/page-header";
import JobCard from "../components/job-card";
import "./home-page.scss";

const userData = {
  name: "Albert Flores",
  headline:
    "Senior Product Designer | UI/UX Designer | Graphic Designer | Web Designer",
  location: "Clinton, Maryland",
  avatar: require("../../assets/images/profile-image.png"),
};

const statsData = {
  profileVisitors: 140,
  resumeViewers: 20,
  myJobs: 88,
};

const interviewsData = [
  {
    id: 1,
    position: "UI UX Designer",
    company: "Figma",
    date: "16th Feb",
    time: "13:45",
    remote: true,
    status: "Accepted",
    logo: require("../../assets/images/company-logo.png"),
  },
  {
    id: 2,
    position: "UI UX Designer",
    company: "Figma",
    date: "16th Feb",
    time: "13:45",
    remote: true,
    status: "Accepted",
    logo: require("../../assets/images/company-logo.png"),
  },
  {
    id: 3,
    position: "UI UX Designer",
    company: "Figma",
    date: "16th Feb",
    time: "13:45",
    remote: true,
    status: "Accepted",
    logo: require("../../assets/images/company-logo.png"),
  },
];

const jobs = [
  {
    id: 1,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA",
    remote: true,
    postedDays: 1,
    applicants: 22,
    promoted: true,
    logo: require("../../assets/images/job-image.png"),
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA",
    remote: true,
    postedDays: 1,
    applicants: 22,
    promoted: true,
    logo: require("../../assets/images/job-image.png"),
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA",
    remote: true,
    postedDays: 1,
    applicants: 22,
    promoted: true,
    logo: require("../../assets/images/job-image.png"),
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA",
    remote: true,
    postedDays: 1,
    applicants: 22,
    promoted: true,
    logo: require("../../assets/images/job-image.png"),
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA",
    remote: true,
    postedDays: 1,
    applicants: 22,
    promoted: true,
    logo: require("../../assets/images/job-image.png"),
  },
];

const HomePage = () => {
  return (
    <div className="home-page flex m-0">
      {/* Sidebar Section*/}
      <Sidebar user={userData} stats={statsData} interviews={interviewsData} />

      {/* Main Content Section*/}
      <main className="main-content">
        <div className="mb-3 mt-5">
          <p className="fw-5 f-23 primary-text-black m-0 mt-1">
            Find your Dream Job, <span className="primary-blue">Albert!</span>
          </p>
          <p className="fw-4 f-15 secondary-text-grey m-0 mt-2">
            Explore the latest job openings and apply for the best opportunities
            available today!
          </p>
        </div>

        {/* Page Header Section */}
        <PageHeader />

        {/* Job Filter Section */}
        <div className="job-filters flex align-items-center gap-3 pb-2">
          <span className="fw-4 f-14 grey mr-2">Similar:</span>
          <Button
            className="filter-btn fw-4 f-12 grey bxsh-n bg-n px-3 py-2"
            label="Frontend"
          />
          <Button
            className="filter-btn fw-4 f-12 grey bxsh-n bg-n px-3 py-2"
            label="Backend"
          />
          <Button
            className="filter-btn fw-4 f-12 grey bxsh-n bg-n px-3 py-2"
            label="Graphic Designer"
          />
        </div>

        {/* Job Listing Section */}
        <div className="job-list-container flex flex-wrap w-full h-full">
          {["Featured Jobs", "Recommended Jobs", "Latest Jobs"].map(
            (section, index) => {
              const jobsToShow =
                section === "Featured Jobs"
                  ? jobs
                  : [...jobs, ...jobs];

              return (
                <div key={section}>
                  <div className="flex gap-5 align-items-center">
                    <p className="fw-4 f-18">{section}</p>
                    <a href="#" className="fw-3 f-15 primary-blue">
                      See {section}
                    </a>
                  </div>
                  <div className="gap-3 card-container">
                    {jobsToShow.map((job) => (
                      <JobCard key={`${job.id}-${index}`} job={job} />
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
