export interface library {
  name: string;
  description: string;
  url: string;
  img?: string;
  tags: string[];
}

export const libraries: library[] = [
  {
    name: "Framer Motion",
    description:
      "A production-ready motion library for React. Utilizes the React Context API to provide a variety of animation features.",
    url: "https://www.framer.com/motion/",
    tags: ["animation", "react"],
  },
  {
    name: "Headless UI",
    description:
      "A set of completely unstyled, fully accessible UI components for React, Vue, and Alpine.js.",
    url: "https://headlessui.dev/",
    tags: ["ui", "react", "vue", "alpine"],
  },
  {
    name: "React Spring",
    description:
      "A spring-physics based animation library that should cover most of your UI related animation needs.",
    url: "https://www.react-spring.io/",
    tags: ["animation", "react"],
  },
  {
    name: "React Semantic UI",
    description:
      "A development framework that helps create beautiful, responsive layouts using human-friendly HTML.",
    url: "https://react.semantic-ui.com/",
    tags: ["ui", "react"],
  },
  {
    name: "Auto Animate",
    description:
      "Zero-config, drop-in animation utility that adds smooth transitions to your web app. You can use it with React, Vue, Svelte, or any other JavaScript application.",
    url: "https://auto-animate.formkit.com/",
    tags: ["animation", "react", "vue", "svelte", "solid"],
  },
  {
    name: "React Aria",
    description:
      "A library of React Hooks that provides accessible UI primitives for your design system.",
    url: "https://react-spectrum.adobe.com/react-aria/index.html",
    tags: ["ui", "react"],
  },
  {
    name: "dnd kit",
    description:
      "A modern, lightweight, performant, accessible and extensible drag & drop toolkit for React.",
    url: "https://dndkit.com/",
    tags: ["ui", "react"],
  },
  {
    name: "use-gesture",
    description:
      "A hook that lets you bind richer mouse and touch events to any component or view.",
    url: "https://use-gesture.netlify.app/",
    tags: ["ui", "react"],
  },
  {
    name: "Nextra",
    description:
      "A Next.js theme for creating documentation websites easily. It's built with MDX and has support for Algolia search.",
    url: "https://nextra.vercel.app/",
    tags: ["nextjs", "documentation"],
  },
];
