import React from "react";
import { Stack } from "@mui/system";
import { Sections } from "../utilities/constants";

const selectedSection = "New";
const Sidebar = () => {
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
          className="section-button"
          style={{
            background: section.name === selectedSection && "#ad9927",
            color: "white",
          }}
          key={section.name}
        >
          <span
            style={{
              color: section.name === selectedSection ? "white" : "#ad9927",
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
