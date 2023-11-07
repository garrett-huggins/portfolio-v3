import { useState } from "react";
import Resources from "./resources";
import Snippets from "./snippets";
import Libraries from "./libraries";
import TechDeck from "./tech-deck";

const CollectionSelector = () => {
  const [selected, setSelected] = useState<
    "Snippets" | "Libraries" | "Resources" | "Tech Deck"
  >("Snippets");

  const Selection = ({
    title,
  }: {
    title: "Snippets" | "Libraries" | "Resources" | "Tech Deck";
  }) => {
    return (
      <button
        onClick={() => setSelected(title)}
        className={`text-xl ${
          selected === title && "underline underline-offset-2"
        }`}
      >
        {title}
      </button>
    );
  };

  return (
    <div className="flex w-full flex-col items-center">
      {/* make normal at md: then change to something smaller before */}
      <div className="my-4 flex space-x-6">
        <Selection title="Snippets" />
        <div className="border border-text dark:border-d-text"></div>
        <Selection title="Libraries" />
        <div className="border border-text dark:border-d-text"></div>
        <Selection title="Resources" />
        <div className="border border-text dark:border-d-text"></div>
        <Selection title="Tech Deck" />
      </div>
      {selected === "Snippets" && <Snippets />}
      {selected === "Libraries" && <Libraries />}
      {selected === "Resources" && <Resources />}
      {selected === "Tech Deck" && <TechDeck />}
    </div>
  );
};

export default CollectionSelector;
