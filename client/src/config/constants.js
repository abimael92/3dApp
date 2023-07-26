import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
    title: "color picker",
  },
  {
    name: "filepicker",
    icon: fileIcon,
    title: "file select",
  },
  {
    name: "aipicker",
    icon: ai,
    title: "AI Helper",

  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
    title: "logo",
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
    title: "texture",
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",

  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",

  },
};
