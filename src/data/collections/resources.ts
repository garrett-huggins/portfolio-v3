export interface resource {
  name: string;
  description: string;
  url: string;
  img?: string;
  tags: string[];
}

export const resources: resource[] = [
  {
    name: "Frontend Mentor",
    description:
      "Frontend challenges with an emphasis on trying to build useful components and designs with already provided content and styles.",
    url: "https://www.frontendmentor.io/challenges",
    img: "https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-hero.webp&w=3840&q=75",
    tags: ["frontend", "design"],
  },
  {
    name: "Frontend Practice",
    description:
      "Practice frontend skills by recreating real websites from real companies.",
    url: "https://www.frontendpractice.com/",
    img: "https://www.frontendpractice.com/_next/image?url=%2Fproject-collage.png&w=3840&q=100",
    tags: ["frontend", "design"],
  },
];
