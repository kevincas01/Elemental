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
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import AutoAwesomeMotionOutlinedIcon from "@mui/icons-material/AutoAwesomeMotionOutlined";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import dynamic from "next/dynamic";
const TabsComponents = dynamic(
  () => import("../Components/UIGallery/TabsComponents/TabsComponents")
);
const CardComponents = dynamic(
  () => import("../Components/UIGallery/CardComponents/CardComponents")
);

export interface listItem {
  name: string;
  url: string;
  icon?: ReactNode;
}

export const sectionsList: listItem[] = [
  { name: "FAQ", url: "/components/faq", icon: <HelpOutlineOutlinedIcon /> },
  {
    name: "Forms",
    url: "/components/forms",
    icon: <InsertDriveFileOutlinedIcon />,
  },
  {
    name: "Heros",
    url: "/components/heros",
    icon: <InsertPhotoOutlinedIcon />,
  },
  {
    name: "Pricing",
    url: "/components/pricing",
    icon: <AttachMoneyOutlinedIcon />,
  },
  { name: "Sign in", url: "/components/sign-in", icon: <LoginOutlinedIcon /> },
];
export const componentsList: listItem[] = [
  {
    name: "Accordions",
    url: "/components/accordions",
    icon: <KeyboardDoubleArrowDownOutlinedIcon />,
  },
  {
    name: "Buttons",
    url: "/components/buttons",
    icon: <AdsClickOutlinedIcon />,
  },
  {
    name: "Cards",
    url: "/components/cards",
    icon: <RectangleOutlinedIcon />,
  },
  {
    name: "Carousels",
    url: "/components/carousels",
    icon: <ViewCarouselOutlinedIcon />,
  },
  {
    name: "Dropdown Menus",
    url: "/components/dropdown-menus",
    icon: <ArrowDropDownCircleOutlinedIcon />,
  },
  {
    name: "Grids",
    url: "/components/grids",
    icon: <AutoAwesomeMosaicOutlinedIcon />,
  },
  {
    name: "Inputs",
    url: "/components/inputs",
    icon: <EditNoteOutlinedIcon />,
  },
  {
    name: "Loaders",
    url: "/components/loaders",
    icon: <HourglassTopOutlinedIcon />,
  },
  {
    name: "Modals",
    url: "/components/modals",
    icon: <RectangleIcon />,
  },
  {
    name: "Navbars & Menus",
    url: "/components/navbars-menus",
    icon: <MenuIcon />,
  },
  {
    name: "Other",
    url: "/components/other",
    icon: <WorkspacesOutlinedIcon />,
  },
  {
    name: "Tabs",
    url: "/components/tabs",
    icon: <AutoAwesomeMotionOutlinedIcon />,
  },
  {
    name: "Text",
    url: "/components/text",
    icon: <TextFieldsIcon />,
  },
  {
    name: "Toggle",
    url: "/components/toggle",
    icon: <ToggleOffOutlinedIcon />,
  },
];

export const componentMappings: Record<
  string,
  { name: string; icon: React.ReactNode; element: React.ReactNode }
> = {
  faq: { name: "FAQ", icon: <HelpOutlineOutlinedIcon />, element: null },
  forms: {
    name: "Forms",
    icon: <InsertDriveFileOutlinedIcon />,
    element: null,
  },
  heros: { name: "Heros", icon: <InsertPhotoOutlinedIcon />, element: null },
  pricing: {
    name: "Pricing",
    icon: <AttachMoneyOutlinedIcon />,
    element: null,
  },
  "sign-in": { name: "Sign in", icon: <LoginOutlinedIcon />, element: null },
  accordions: {
    name: "Accordions",
    icon: <KeyboardDoubleArrowDownOutlinedIcon />,
    element: null,
  },
  buttons: { name: "Buttons", icon: <AdsClickOutlinedIcon />, element: null },
  cards: {
    name: "Cards",
    icon: <RectangleOutlinedIcon />,
    element: <CardComponents />,
  },
  carousels: {
    name: "Carousels",
    icon: <ViewCarouselOutlinedIcon />,
    element: null,
  },
  "dropdown-menus": {
    name: "Dropdown Menus",
    icon: <ArrowDropDownCircleOutlinedIcon />,
    element: null,
  },
  grids: {
    name: "Grids",
    icon: <AutoAwesomeMosaicOutlinedIcon />,
    element: null,
  },
  inputs: { name: "Inputs", icon: <EditNoteOutlinedIcon />, element: null },
  loaders: {
    name: "Loaders",
    icon: <HourglassTopOutlinedIcon />,
    element: null,
  },
  modals: { name: "Modals", icon: <RectangleIcon />, element: null },
  "navbars-menus": {
    name: "Navbars & Menus",
    icon: <MenuIcon />,
    element: null,
  },
  other: { name: "Other", icon: <WorkspacesOutlinedIcon />, element: null },
  tabs: {
    name: "Tabs",
    icon: <AutoAwesomeMotionOutlinedIcon />,
    element: <TabsComponents />,
  },
  text: {
    name: "Text",
    icon: <TextFieldsIcon />,
    element: null,
  },
  toggle: { name: "Toggle", icon: <ToggleOffOutlinedIcon />, element: null },
};
