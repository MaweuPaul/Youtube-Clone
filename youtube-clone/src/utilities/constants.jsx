import { BsMusicNote } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { RiMovieLine } from "react-icons/ri";
import { MdSportsScore } from "react-icons/md";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { MdSchool } from "react-icons/md";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import { ImPodcast } from "react-icons/im";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

export const Sections = [
  { name: "New", icon: <AiFillHome /> },
  { name: "Music", icon: <BsMusicNote /> },
  { name: "Education", icon: <MdSchool /> },
  { name: "Podcast", icon: <ImPodcast /> },
  { name: "Movie", icon: <RiMovieLine /> },
  { name: "Gaming", icon: <MdSportsScore /> },
  { name: "Live", icon: <LiveTvIcon /> },
  { name: "Sport", icon: <FitnessCenterIcon /> },
  { name: "Fashion", icon: <CheckroomIcon /> },
  { name: "Beauty", icon: <FaceRetouchingNaturalIcon /> },
  { name: "Comedy", icon: <TheaterComedyIcon /> },
  { name: "Gym", icon: <FitnessCenterIcon /> },
  { name: "Crypto", icon: <DeveloperModeIcon /> },
];
