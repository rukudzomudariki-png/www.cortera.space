import { Radar, Pickaxe, WifiOff } from "lucide-react";
import type { IndustryContent } from "./types";

export const mining: IndustryContent = {
  slug: "mining",
  title: "Mining",
  description:
    "Cortera builds robotic systems designed for the hazards of mining, with human oversight and defined limits built in.",
  canonical: "/industries/mining",
  eyebrow: "MINING",
  h1: "Autonomy where the ground is *unforgiving*.",
  lede:
    "Extraction, inspection and movement of material happen in dust, darkness and tight spaces. Cortera builds robotic systems designed to take on the most hazardous tasks, supervised by the people who know the site.",
  conditions: {
    h2: "Few environments are this *hard* on machines.",
    lede:
      "Underground and open-pit operations change by the hour. Systems built for clean, predictable settings struggle here.",
    items: [
      "Confined, poorly lit tunnels",
      "Dust, heat and vibration",
      "Unstable ground and changing geometry",
      "Limited or no connectivity underground",
      "People and heavy machinery sharing space",
    ],
  },
  build: {
    h2: "Designed to take people *out of harm's way*.",
    blocks: [
      {
        icon: Radar,
        title: "Inspection of hazardous areas",
        body: "Robots designed to travel areas that are difficult or unsafe for people and report what they find.",
      },
      {
        icon: Pickaxe,
        title: "Support for extraction tasks",
        body: "Systems designed to assist with extraction work in conditions that defeat ordinary automation.",
      },
      {
        icon: WifiOff,
        title: "Operation without perfect connectivity",
        body: "Autonomy designed to keep working safely when links to the surface are limited.",
      },
    ],
  },
  closing: {
    h2: "Talk to us about your *operation*.",
    lede: "Tell us about your site and its hazards. We will tell you honestly what is possible.",
  },
  otherIndustry: {
    label: "Agriculture",
    href: "/industries/agriculture",
    description: "Agriculture: Machines that work the land with precision and care.",
  },
};
