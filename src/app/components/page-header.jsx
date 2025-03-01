import React from "react";
import { Search } from "lucide-react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const PageHeader = () => {
  const locations = ["Select Location", "Remote", "New York", "San Francisco"];
  const jobTypes = ["Job Type", "Full-time", "Part-time", "Contract"];

  return (
    <div className="page-header flex justify-content-center w-full px-1 py-3 my-3">
      <div className="search-container flex align-items-center w-full p-2">
        <InputText className="search-input brd-n" placeholder="Job Title, Company, or Keywords" />

        <Dropdown 
          className="search-dropdown c-brd align-items-center px-3" 
          options={locations.map((location) => ({ label: location, value: location }))}
          placeholder="Select Location"
        />

        <Dropdown 
          className="search-dropdown brd-n align-items-center mr-3 pl-3"
          options={jobTypes.map((type) => ({ label: type, value: type }))}
          placeholder="Job Type"
        />

        <Button className="search-button f-16 flex align-items-center px-5 py-2" label="Search" icon={<Search size={16} />} />
      </div>
    </div>
  );
};

export default PageHeader;