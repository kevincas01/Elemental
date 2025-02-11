import { ReactNode } from "react";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import RectangleOutlinedIcon from "@mui/icons-material/RectangleOutlined";
import ViewCarouselOutlinedIcon from "@mui/icons-material/ViewCarouselOutlined";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import RectangleIcon from "@mui/icons-material/Rectangle";
import MenuIcon from "@mui/icons-material/Menu";
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";

export interface listItem {
  name: string;
  url: string;
  icon?: ReactNode;
}
export const sectionsList: listItem[] = [
  { name: "FAQ", url: "/faq", icon: <HelpOutlineOutlinedIcon /> },
  { name: "Forms", url: "/forms", icon: <InsertDriveFileOutlinedIcon /> },
  { name: "Heros", url: "/heros", icon: <InsertPhotoOutlinedIcon /> },
  { name: "Pricing", url: "/pricing", icon: <AttachMoneyOutlinedIcon /> },
  { name: "Sign in", url: "/sign-in", icon: <LoginOutlinedIcon /> },
];
export const componentsList: listItem[] = [
  {
    name: "Accordions",
    url: "/accordions",
    icon: <KeyboardDoubleArrowDownOutlinedIcon />,
  },
  {
    name: "Buttons",
    url: "/buttons",
    icon: <AdsClickOutlinedIcon />,
  },
  {
    name: "Cards",
    url: "/cards",
    icon: <RectangleOutlinedIcon />,
  },
  {
    name: "Carousels",
    url: "/carousels",
    icon: <ViewCarouselOutlinedIcon />,
  },
  {
    name: "Dropdown Menus",
    url: "/dropdown-menus",
    icon: <ArrowDropDownCircleOutlinedIcon />,
  },
  {
    name: "Grids",
    url: "/grids",
    icon: <AutoAwesomeMosaicOutlinedIcon />,
  },
  {
    name: "Inputs",
    url: "/inputs",
    icon: <EditNoteOutlinedIcon />,
  },
  {
    name: "Loaders",
    url: "/loaders",
    icon: <HourglassTopOutlinedIcon />,
  },
  {
    name: "Modals",
    url: "/modals",
    icon: <RectangleIcon />,
  },
  {
    name: "Navbars & Menus",
    url: "/navbars-menus",
    icon: <MenuIcon />,
  },
  {
    name: "Other",
    url: "/other",
    icon: <WorkspacesOutlinedIcon />,
  },
  { name: "Tabs", url: "/tabs", icon: <AutoAwesomeMotionOutlinedIcon /> },
  {
    name: "Toggle",
    url: "/toggle",
    icon: <ToggleOffOutlinedIcon />,
  },
];
