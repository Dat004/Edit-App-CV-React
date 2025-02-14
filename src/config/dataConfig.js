import graphDotImg from "../assets/images/backgrounds/graph-dot.png";
import triangleImg from "../assets/images/backgrounds/triangle.png";
import squareImg from "../assets/images/backgrounds/square.png";
import graphImg from "../assets/images/backgrounds/graph.png";
import lineImg from "../assets/images/backgrounds/line.png";
import noneImg from "../assets/images/backgrounds/none.png";
import techImg from "../assets/images/backgrounds/tech.png";
import waveImg from "../assets/images/backgrounds/wave.png";
import dotImg from "../assets/images/backgrounds/dot.png";
import hexImg from "../assets/images/backgrounds/hex.png";

import chickenTemplate from "../assets/images/templates/chicken.png";
import basicTemplate from "../assets/images/templates/basic.png";
import rabbitTemplate from "../assets/images/templates/rabbit.png";
import crispTemplate from "../assets/images/templates/crisp.png";
import cascadeTemplate from "../assets/images/templates/cascade.png";
import iconicTemplate from "../assets/images/templates/iconic.png";
import vibesTemplate from "../assets/images/templates/vibes.png";
import simpleTemplate from "../assets/images/templates/simple.png";
import bubblesTemplate from "../assets/images/templates/bubbles.png";
import conceptTemplate from "../assets/images/templates/concept.png";
import deckerTemplate from "../assets/images/templates/decker.png";
import enfoldTemplate from "../assets/images/templates/enfold.png";
import messageTemplate from "../assets/images/templates/message.png";
import newsweekTemplate from "../assets/images/templates/newsweek.png";

import {
  BoldTextFormatIcon,
  UnderlineTextFormatIcon,
  ItalicTextFormatIcon,
  ListTextFormatIcon,
} from "../icons";

export const formatTextConfig = [
  {
    id: 1,
    icon: BoldTextFormatIcon,
    value: "bold",
    type: "bold",
  },
  {
    id: 2,
    icon: UnderlineTextFormatIcon,
    value: "underline",
    type: "underline",
  },
  {
    id: 3,
    icon: ItalicTextFormatIcon,
    value: "italic",
    type: "italic",
  },
  {
    id: 4,
    icon: ListTextFormatIcon,
    value: "insertUnorderedList",
    type: "unorderedList",
  },
];

export const templateDataConfig = [
  {
    id: 1,
    name: "chicken",
    value: chickenTemplate,
  },
  {
    id: 2,
    name: "basic",
    value: basicTemplate,
  },
  {
    id: 3,
    name: "rabbit",
    value: rabbitTemplate,
  },
  {
    id: 4,
    name: "crisp",
    value: crispTemplate,
  },
  {
    id: 5,
    name: "cascade",
    value: cascadeTemplate,
  },
  {
    id: 6,
    name: "iconic",
    value: iconicTemplate,
  },
  {
    id: 7,
    name: "vibes",
    value: vibesTemplate,
  },
  {
    id: 8,
    name: "simple",
    value: simpleTemplate,
  },
  {
    id: 9,
    name: "concept",
    value: conceptTemplate,
  },
  {
    id: 10,
    name: "enfold",
    value: enfoldTemplate,
  },
  {
    id: 11,
    name: "newsweek",
    value: newsweekTemplate,
  },
  {
    id: 12,
    name: "decker",
    value: deckerTemplate,
  },
  {
    id: 13,
    name: "bubbles",
    value: bubblesTemplate,
  },
  {
    id: 14,
    name: "message",
    value: messageTemplate,
  },
];

export const backgroundDataConfig = [
  [
    {
      id: 1,
      name: "none",
      value: noneImg,
    },
    {
      id: 2,
      name: "graph",
      value: graphImg,
    },
    {
      id: 3,
      name: "line",
      value: lineImg,
    },
    {
      id: 4,
      name: "dot",
      value: dotImg,
    },
  ],
  [
    {
      id: 1,
      name: "graph-dot",
      value: graphDotImg,
    },
    {
      id: 2,
      name: "tech",
      value: techImg,
    },
    {
      id: 3,
      name: "triangle",
      value: triangleImg,
    },
    {
      id: 4,
      name: "wave",
      value: waveImg,
    },
  ],
  [
    {
      id: 1,
      name: "hex",
      value: hexImg,
    },
    {
      id: 2,
      name: "square",
      value: squareImg,
    },
  ],
];

export const colorDataConfig = [
  [
    { id: 1, code: "rgb(68, 129, 190)", hex: "#4481be" },
    { id: 2, code: "rgb(235, 74, 59)", hex: "#eb4a3b" },
    { id: 3, code: "rgb(156, 28, 56)", hex: "#9c1c38" },
    { id: 4, code: "rgb(82, 119, 148)", hex: "#527794" },
    { id: 5, code: "rgb(85, 85, 85)", hex: "#555555" },
    { id: 6, code: "rgb(202, 168, 120)", hex: "#caa878" },
    { id: 7, code: "rgb(0, 124, 170)", hex: "#007cab" },
    { id: 8, code: "rgb(68, 175, 164)", hex: "#44afa4" },
    { id: 9, code: "rgb(116, 195, 58)", hex: "#74c33a" },
    { id: 10, code: "rgb(251, 173, 0)", hex: "#fbad00" },
    { id: 11, code: "rgb(0, 159, 227)", hex: "#009fe3" },
    { id: 12, code: "rgb(232, 80, 122)", hex: "#e8507a" },
    { id: 13, code: "rgb(74, 26, 103)", hex: "#4a1a67" },
    { id: 14, code: "rgb(38, 166, 154)", hex: "#26a69a" },
    { id: 15, code: "rgb(221, 63, 87)", hex: "#dd3f57" },
    { id: 16, code: "rgb(42, 101, 152)", hex: "#2a6598" },
  ],
  [
    { id: 1, code: "rgb(240, 76, 64)", hex: "#f04c40" },
    { id: 2, code: "rgb(249, 158, 61)", hex: "#f99e3d" },
    { id: 3, code: "rgb(234, 175, 0)", hex: "#eabf00" },
    { id: 4, code: "rgb(63, 89, 168)", hex: "#3f59a8" },
    { id: 5, code: "rgb(71, 144, 153)", hex: "#479099" },
    { id: 6, code: "rgb(55, 68, 88)", hex: "#374458" },
    { id: 7, code: "rgb(45, 188, 173)", hex: "#2dbcad" },
    { id: 8, code: "rgb(79, 144, 205)", hex: "#4f90cd" },
    { id: 9, code: "rgb(125, 32, 63)", hex: "#7d203f" },
    { id: 10, code: "rgb(111, 66, 154)", hex: "#6f429a" },
    { id: 11, code: "rgb(0, 0, 0)", hex: "#000000" },
    { id: 12, code: "rgb(142, 142, 142)", hex: "#8e8e8e" },
    { id: 13, code: "rgb(25, 48, 66)", hex: "#192042" },
    { id: 14, code: "rgb(69, 137, 102)", hex: "#458964" },
    { id: 15, code: "rgb(76, 41, 76)", hex: "#4c294c" },
    { id: 16, code: "rgb(150, 29, 17)", hex: "#961d11" },
  ],
  [
    { id: 1, code: "rgb(105, 112, 132)", hex: "#697a84" },
    { id: 2, code: "rgb(198, 160, 103)", hex: "#c6a967" },
    { id: 3, code: "rgb(204, 80, 24)", hex: "#cc5018" },
    { id: 4, code: "rgb(209, 30, 47)", hex: "#d91e2f" },
    { id: 5, code: "rgb(158, 43, 111)", hex: "#9e2b6f" },
    { id: 6, code: "rgb(74, 99, 61)", hex: "#4a633d" },
    { id: 7, code: "rgb(124, 160, 43)", hex: "#7ca92b" },
    { id: 8, code: "rgb(23, 77, 173)", hex: "#174dad" },
    { id: 9, code: "rgb(21, 70, 119)", hex: "#154677" },
    { id: 10, code: "rgb(81, 43, 142)", hex: "#512b8e" },
    { id: 11, code: "rgb(42, 173, 113)", hex: "#2aad71" },
    { id: 12, code: "rgb(107, 41, 41)", hex: "#6b2929" },
    { id: 13, code: "rgb(181, 126, 67)", hex: "#b57e43" },
    { id: 14, code: "rgb(24, 134, 209)", hex: "#1886d1" },
    { id: 15, code: "rgb(198, 20, 54)", hex: "#c61436" },
    { id: 16, code: "rgb(10, 86, 80)", hex: "#0a5650" },
  ],
];
