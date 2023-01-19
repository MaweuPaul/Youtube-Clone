import React from "react";
import { Stack } from "@mui/system";
import { Sections } from "../utilities/constants";

const Sidebar = ({ selectedSection, setSelectedSection }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {Sections.map((section) => (
        <button
          onClick={() => setSelectedSection(section.name)}
          className="section-button"
          style={{
            background: section.name === selectedSection && "#ff6b08",
            color: "white",
          }}
          key={section.name}
        >
          <span
            className="icon"
            style={{
              color: section.name === selectedSection ? "white" : "#ff6b08",
              marginRight: "10px",
            }}
          >
            {section.icon}
          </span>
          <span>{section.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
