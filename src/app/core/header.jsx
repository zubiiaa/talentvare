import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Search } from "lucide-react";
import avatarImage from "../../assets/images/avatar.png"; 
import "./core.scss";

const Header = () => {
  const [activeItem, setActiveItem] = useState("Find Jobs");

  const menuItems = [
    { label: "Find Jobs", url: "#" },
    { label: "Top Companies", url: "#" },
    { label: "Job Tracker", url: "#" },
    { label: "My Calendar", url: "#" },
    { label: "Documents", url: "#" },
    { label: "Messages", url: "#" },
    { label: "Notifications", url: "#" },
  ];

  const menuRenderer = (item) => (
    <span
      className={`menu-item grey f-16 fw-4 cursor-pointer p-3 ${activeItem === item.label ? "active" : ""}`}
      onClick={() => setActiveItem(item.label)}
    >
      {item.label}
    </span>
  );

  const start = <img src={require("../../assets/images/talentvare-logo.png")} alt="Logo" className="mx-5" height="41" />;
  
  const end = (
    <div className="gap-3 flex align-items-center mr-3">
      <span className="search-bar flex align-items-center">
        <Search className="grey" />
        <InputText placeholder="Search" className="search-input brd-n bg-n otl-n" />
      </span>
      <Button label="Resume Builder" className="resume-button f-16" />
      <Avatar image={avatarImage} shape="circle" style={{ width: "38px", height: "38px" }} />
    </div>
  );
  
  return <Menubar model={menuItems.map((item) => ({ ...item, template: menuRenderer(item) }))} start={start} end={end}  className="flex justify-content-between align-items-center custom-header" />;
};

export default Header;
