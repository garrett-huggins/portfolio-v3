export interface tool {
  name: string;
  description: string;
  url: string;
}

export const tools: tool[] = [
  {
    name: "Carbon",
    description: "Create and share beautiful images of your source code.",
    url: "https://carbon.now.sh/",
  },
  {
    name: "UI Colors",
    description: "Generate color palettes for your TailwindCSS UI.",
    url: "https://uicolors.app/create",
  },
  {
    name: "ray.so",
    description: "Create beautiful images of your source code.",
    url: "https://ray.so/",
  },
];
