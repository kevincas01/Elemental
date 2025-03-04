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
import BubbleCard from "../Components/UIGallery/CardComponents/BubbleCard";
import FlipCard from "../Components/UIGallery/CardComponents/FlipCard";
import LinksHoverCard from "../Components/UIGallery/CardComponents/LinksHoverCard";
import { SlidingTabSelector } from "../Components/UIGallery/TabsComponents/SlidingTabSelector";
import RevealText from "../Components/UIGallery/TextComponents/RevealText";
import SlidingText from "../Components/UIGallery/TextComponents/SlidingText";
import LiftButton from "../Components/UIGallery/ButtonComponents/LiftButton";
import WetPaintButton from "../Components/UIGallery/ButtonComponents/WetPaintButton";
import LinksRevealCard from "../Components/UIGallery/CardComponents/LinksRevealCard";
import Envelope from "../Components/UIGallery/CardComponents/Envelope";
import { FileGroup } from "../Types/files";
import ZoomOutProfile from "../Components/UIGallery/CardComponents/ZoomOutProfile";
import ToggleDarkSwitch from "../Components/UIGallery/ToggleComponents/ToggleDarkSwitch";
import LinkExpandCircle from "../Components/UIGallery/OtherComponents/LinkExpandCircle";
import SpinCarousal3d from "../Components/UIGallery/CarousalComponents/SpinCarousal3d";

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

// files: {filegroup:string, files:{ language: string; title: string; path: string }[]}[]
// { language: string; title: string; path: string }[];
export const componentMappings: Record<
  string,
  {
    name: string;
    icon: React.ReactNode;
    elements: {
      title: string;
      component: React.ReactNode;
      fileGroups: FileGroup[];
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
        fileGroups: [
          {
            filegroup: "Typescript/Tailwind",
            files: [
              {
                language: "javascript",
                title: "LiftButton.tsx",
                path: "ButtonComponents/LiftButton.tsx",
              },
            ],
          },
        ],
      },
      {
        title: "Wet Paint Button",
        component: <WetPaintButton />,
        fileGroups: [
          {
            filegroup: "Typescript/Tailwind",
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
    ],
  },
  cards: {
    name: "Cards",
    icon: <RectangleOutlinedIcon />,
    elements: [
      {
        title: "Bubble Card",
        component: <BubbleCard />,
        fileGroups: [
          {
            filegroup: "Typescript/Tailwind",
            files: [
              {
                language: "javascript",
                title: "BubbleCard.tsx",
                path: "CardComponents/BubbleCard.tsx",
              },
            ],
          },
        ],
      },
      {
        title: "Flip Card",
        component: <FlipCard />,
        fileGroups: [
          {
            filegroup: "Typescript/Tailwind",
            files: [
              {
                language: "javascript",
                title: "FlipCard.tsx",
                path: "CardComponents/FlipCard.tsx",
              },
            ],
          },
        ],
      },
      {
        title: "Links Hover Card",
        component: <LinksHoverCard />,
        fileGroups: [
          {
            filegroup: "Typescript/CSS",
            files: [
              {
                language: "javascript",
                title: "LinksHoverCard.tsx",
                path: "CardComponents/LinksHoverCard.tsx",
              },
              {
                language: "css",
                title: "LinksHoverCard.css",
                path: "LinksHoverCard.css",
              },
            ],
          },
        ],
      },
      {
        title: "Links Reveal Card",
        component: <LinksRevealCard />,
        fileGroups: [
          {
            filegroup: "Typescript/CSS",
            files: [
              {
                language: "javascript",
                title: "LinksRevealCard.tsx",
                path: "CardComponents/LinksRevealCard.tsx",
              },
              {
                language: "css",
                title: "LinksRevealCard.css",
                path: "LinksRevealCard.css",
              },
            ],
          },
        ],
      },
      {
        title: "Envelope Card",
        component: <Envelope />,
        fileGroups: [
          {
            filegroup: "Typescript/CSS",
            files: [
              {
                language: "javascript",
                title: "Envelope.tsx",
                path: "CardComponents/Envelope.tsx",
              },
              {
                language: "css",
                title: "Envelope.css",
                path: "Envelope.css",
              },
            ],
          },
        ],
      },
      {
        title: "Zoom Out Profile Card",
        component: <ZoomOutProfile />,
        fileGroups: [
          {
            filegroup: "Typescript/Tailwind",
            files: [
              {
                language: "javascript",
                title: "ZoomOutProfile.tsx",
                path: "CardComponents/ZoomOutProfile.tsx",
              },
            ],
          },
        ],
      },
    ],
  },
  carousels: {
    name: "Carousels",
    icon: <ViewCarouselOutlinedIcon />,
    elements: [{
      title: "Spin Carousal 3D",
      component: <SpinCarousal3d />,
      fileGroups: [
        {
          filegroup: "Typescript/CSS",
          files: [
            {
              language: "javascript",
              title: "SpinCarousal3d.tsx",
              path: "CarousalComponents/SpinCarousal3d.tsx",
            },
            {
              language: "css",
              title: "SpinCarousal3d.css",
              path: "SpinCarousal3d.css",
            },
          ],
          
        },
      ],
    },],
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
  other: { name: "Other", icon: <WorkspacesOutlinedIcon />, elements: [
    {
      title: "Link Expand Circle",
      component: <LinkExpandCircle />,
      fileGroups: [
        {
          filegroup: "Typescript/Tailwind",
          files: [
            {
              language: "javascript",
              title: "LinkExpandCircle.tsx",
              path: "OtherComponents/LinkExpandCircle.tsx",
            },
          ],
        },
      ],
    },
  ] },
  tabs: {
    name: "Tabs",
    icon: <AutoAwesomeMotionOutlinedIcon />,
    elements: [
      {
        title: "Sliding Tabs Selector",
        component: <SlidingTabSelector />,
        fileGroups: [
          {
            filegroup: "Typescript/Tailwind",
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
    ],
  },
  text: {
    name: "Text",
    icon: <TextFieldsIcon />,
    elements: [
      {
        title: "Slide Mask Reveal Text",
        component: <RevealText text="Elemental" />,
        fileGroups: [
          {
            filegroup: "Typescript/Tailwind",
            files: [
              {
                language: "javascript",
                title: "RevealText.tsx",
                path: "TextComponents/RevealText.tsx",
              },
            ],
          },
        ],
      },
      {
        title: "Sliding Text",
        component: <SlidingText />,
        fileGroups: [
          {
            filegroup: "Typescript/Tailwind",
            files: [
              {
                language: "javascript",
                title: "SlidingText.tsx",
                path: "TextComponents/SlidingText.tsx",
              },
              {
                language: "css",
                title: "SlidingText.css",
                path: "SlidingText.css",
              },
            ],
          },
        ],
      },
    ],
  },
  // ToggleDarkSwitch
  toggle: {
    name: "Toggle" ,
    icon: <ToggleOffOutlinedIcon />,
    elements: [
      {
        title: "Toggle Dark Switch",
        component: <ToggleDarkSwitch />,
        fileGroups: [
          {
            filegroup: "Typescript/Tailwind",
            files: [
              {
                language: "javascript",
                title: "ToggleDarkSwitch.tsx",
                path: "ToggleComponents/ToggleDarkSwitch.tsx",
              },
            ],
          },
        ],
      },
    ],
  },
};
