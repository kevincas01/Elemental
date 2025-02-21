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
import BubbleCard from "../Components/UIGallery/CardComponents/BubbleCard";
import FlipCard from "../Components/UIGallery/CardComponents/FlipCard";
import LinksHoverCard from "../Components/UIGallery/CardComponents/LinksHoverCard";
import { SlidingTabSelector } from "../Components/UIGallery/TabsComponents/SlidingTabSelector";
import RevealText from "../Components/UIGallery/TextComponents/RevealText";
import SlidingText from "../Components/UIGallery/TextComponents/SlidingText";
import LiftButton from "../Components/UIGallery/ButtonComponents/LiftButton";
import WetPaintButton from "../Components/UIGallery/ButtonComponents/WetPaintButton";

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
  {
    name: string;
    icon: React.ReactNode;
    elements: {
      title: string;
      component: React.ReactNode;
      files: { language: string; title: string; path: string }[];
    }[];
  }
> = {
  faq: { name: "FAQ", icon: <HelpOutlineOutlinedIcon />, elements: [] },
  forms: {
    name: "Forms",
    icon: <InsertDriveFileOutlinedIcon />,
    elements: [],
  },
  heros: { name: "Heros", icon: <InsertPhotoOutlinedIcon />, elements: [] },
  pricing: {
    name: "Pricing",
    icon: <AttachMoneyOutlinedIcon />,
    elements: [],
  },
  "sign-in": { name: "Sign in", icon: <LoginOutlinedIcon />, elements: [] },
  accordions: {
    name: "Accordions",
    icon: <KeyboardDoubleArrowDownOutlinedIcon />,
    elements: [],
  },
  buttons: {
    name: "Buttons",
    icon: <AdsClickOutlinedIcon />,
    elements: [
      {
        title: "Lift Button",
        component: <LiftButton />,
        files: [
          {
            language: "javascript",
            title: "LiftButton.tsx",
            path: "ButtonComponents/LiftButton.tsx",
          },
        ],
      },
      {
        title: "Wet Paint Button",
        component: <WetPaintButton />,
        files: [
          {
            language: "javascript",
            title: "WetPaintButton.tsx",
            path: "ButtonComponents/WetPaintButton.tsx",
          },
        ],
      },
    ],
  },
  cards: {
    name: "Cards",
    icon: <RectangleOutlinedIcon />,
    elements: [
      {
        title: "Bubble Card",
        component: <BubbleCard />,
        files: [
          {
            language: "javascript",
            title: "BubbleCard.tsx",
            path: "CardComponents/BubbleCard.tsx",
          },
        ],
      },
      {
        title: "Flip Card",
        component: <FlipCard />,
        files: [
          {
            language: "javascript",
            title: "FlipCard.tsx",
            path: "CardComponents/FlipCard.tsx",
          },
        ],
      },
      {
        title: "Links Hover Card",
        component: <LinksHoverCard />,
        files: [
          {
            language: "javascript",
            title: "LinksHoverCard.tsx",
            path: "CardComponents/LinksHoverCard.tsx",
          },
        ],
      },
    ],
  },
  carousels: {
    name: "Carousels",
    icon: <ViewCarouselOutlinedIcon />,
    elements: [],
  },
  "dropdown-menus": {
    name: "Dropdown Menus",
    icon: <ArrowDropDownCircleOutlinedIcon />,
    elements: [],
  },
  grids: {
    name: "Grids",
    icon: <AutoAwesomeMosaicOutlinedIcon />,
    elements: [],
  },
  inputs: { name: "Inputs", icon: <EditNoteOutlinedIcon />, elements: [] },
  loaders: {
    name: "Loaders",
    icon: <HourglassTopOutlinedIcon />,
    elements: [],
  },
  modals: { name: "Modals", icon: <RectangleIcon />, elements: [] },
  "navbars-menus": {
    name: "Navbars & Menus",
    icon: <MenuIcon />,
    elements: [],
  },
  other: { name: "Other", icon: <WorkspacesOutlinedIcon />, elements: [] },
  tabs: {
    name: "Tabs",
    icon: <AutoAwesomeMotionOutlinedIcon />,
    elements: [
      {
        title: "Sliding Tabs Selector",
        component: <SlidingTabSelector />,
        files: [
          {
            language: "javascript",
            title: "SlidingTabSelector.tsx",
            path: "TabsComponents/SlidingTabSelector.tsx",
          },
        ],
      },
    ],
  },
  text: {
    name: "Text",
    icon: <TextFieldsIcon />,
    elements: [
      {
        title: "Slide Mask Reveal Text",
        component: <RevealText text="Elemental" />,
        files: [
          {
            language: "javascript",
            title: "RevealText.tsx",
            path: "TextComponents/RevealText.tsx",
          },
        ],
      },
      {
        title: "Sliding Text",
        component: <SlidingText />,
        files: [
          {
            language: "javascript",
            title: "SlidingText.tsx",
            path: "TextComponents/SlidingText.tsx",
          },
        ],
      },
    ],
  },
  toggle: { name: "Toggle", icon: <ToggleOffOutlinedIcon />, elements: [] },
};
