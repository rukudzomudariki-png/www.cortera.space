import { Sprout, Crosshair, WifiOff } from "lucide-react";
import type { IndustryContent } from "./types";

export const agriculture: IndustryContent = {
  slug: "agriculture",
  title: "Agriculture",
  description:
    "Cortera builds robotic systems designed for demanding field work in agriculture, with human oversight and defined limits built in.",
  canonical: "/industries/agriculture",
  eyebrow: "AGRICULTURE",
  h1: "Autonomy that works the land with *care*.",
  lede:
    "Farming runs on timing, terrain and weather. Cortera builds robotic systems designed to take on demanding field work with precision, supervised by the people who know the land.",
  conditions: {
    h2: "The field is never *the same* twice.",
    lede:
      "Every season, plot and day brings different ground, weather and crop conditions. Machines must adapt rather than repeat.",
    items: [
      "Large, uneven and changing fields",
      "Weather, mud and seasonal peaks",
      "Narrow windows for key operations",
      "Remote locations with limited connectivity",
      "Crops, animals and people sharing space",
    ],
  },
  build: {
    h2: "Designed to work *with* the land.",
    blocks: [
      {
        icon: Sprout,
        title: "Field monitoring",
        body: "Machines designed to observe crops and conditions across large areas and flag what needs attention.",
      },
      {
        icon: Crosshair,
        title: "Precision field tasks",
        body: "Systems designed to carry out repeatable tasks with care for the crop and the soil.",
      },
      {
        icon: WifiOff,
        title: "Remote operation",
        body: "Autonomy designed to keep working safely far from reliable connectivity.",
      },
    ],
  },
  closing: {
    h2: "Talk to us about your *land*.",
    lede: "Tell us about your fields, your crops and your constraints. We will tell you honestly what is possible.",
  },
  otherIndustry: {
    label: "Mining",
    href: "/industries/mining",
    description: "Mining: Autonomy for extraction and the hazards of working underground.",
  },
};
