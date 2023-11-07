import { useState } from "react";

const CollectionSelector = () => {
  const [selected, setSelected] = useState<
    "Snippets" | "Libraries" | "Resources"
  >("Snippets");

  const Selection = ({
    title,
  }: {
    title: "Snippets" | "Libraries" | "Resources";
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
    <div className="flex w-full justify-center">
      <div className="flex space-x-6">
        <Selection title="Snippets" />
        <div className="border border-text dark:border-d-text"></div>
        <Selection title="Libraries" />
        <div className="border border-text dark:border-d-text"></div>
        <Selection title="Resources" />
      </div>
    </div>
  );
};

export default CollectionSelector;
