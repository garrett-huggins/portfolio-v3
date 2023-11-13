export interface resource {
  name: string;
  description: string;
  url: string;
  tags: string[];
}

export const resources: resource[] = [
  {
    name: "Frontend Mentor",
    description:
      "Frontend challenges with an emphasis on trying to build useful components and designs with already provided content and styles.",
    url: "https://www.frontendmentor.io/challenges",
    tags: ["frontend", "design"],
  },
  {
    name: "Frontend Practice",
    description:
      "Practice frontend skills by recreating real websites from real companies.",
    url: "https://www.frontendpractice.com/",
    tags: ["frontend", "design"],
  },
];
