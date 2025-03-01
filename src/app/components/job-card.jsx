import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Avatar } from "primereact/avatar";
import { MapPin, Clock, Users, Bookmark } from "lucide-react";

const JobCard = ({ job }) => {
  return (
    <Card className="job-card bxsh-n py-1 px-3">
      {job.promoted && (
        <p className="fw-5 f-10 primary-text-black mt-1"> Promoted </p>
      )}
      <div className="flex align-items-center m-0 mb-1">
        <Avatar image={job.logo} size="normal" />
        <div className="pl-3">
          <h3 className="fw-4 f-14 primary-text-black mt-1 m-0">{job.title}</h3>
          <p className="fw-4 f-12 primary-text-black mt-1 m-0">{job.company}</p>
        </div>
      </div>
      <div className="p-0 m-0">
        <div className="flex align-items-center mt-2">
          <MapPin className="job-svg" />
          <span className="fw-4 f-12 secondary-text-grey ml-2">
            {job.location} {job.remote ? "(Remote)" : ""}
          </span>
        </div>
        <div className="flex align-items-center mt-1">
          <Clock className="job-svg" />
          <span className="fw-4 f-12 secondary-text-grey ml-2">
            {job.postedDays} day ago |{" "}
          </span>
          <span className="fw-4 f-12 primary-blue ml-1">
            {job.applicants} applicants
          </span>
        </div>
      </div>
      <div className="flex justify-content-between align-items-center mt-2">
        <Button label="Apply Now" className="apply-button brd-n f-12 flex align-items-center" />
        <Button icon={<Bookmark />} className="save-button bg-n brd-n justify-content-end" />
      </div>
    </Card>
  );
};

export default JobCard;
