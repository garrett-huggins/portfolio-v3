import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: "100%",
  },
};

const MenuButton = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    console.log("clicked");
    setOpen(!open);
  };

  const sections = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Contact",
      href: "#contact",
    },
    {
      name: "Blog",
      href: "#blog",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Resume",
      href: "#resume",
    },
    {
      name: "Collections",
      href: "#collections",
    },
    {
      name: "Stack",
      href: "#stack",
    },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={toggleModal}
        className="dark:bg-d-primary hover:dark:bg-d-accent hover:bg-accent dark:border-d-accent border-accent ml-2 rounded-lg border-2 bg-primary p-2"
      >
        <Menu size={24} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            animate={open ? "open" : "closed"}
            initial="closed"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.25 }}
            className="bg-background dark:bg-d-background absolute right-0 top-0 z-10 h-full w-full"
          >
            <button
              onClick={toggleModal}
              className="dark:bg-d-primary hover:dark:bg-d-accent hover:bg-accent dark:border-d-accent border-accent absolute right-0 top-0 m-4 ml-2 rounded-lg border-2 bg-primary p-2"
            >
              <X size={24} />
            </button>
            <ul className="mt-20 flex w-full flex-col justify-center">
              {sections.map((section) => (
                <a
                  key={section.name}
                  onClick={toggleModal}
                  href={section.href}
                  className="hover:bg-accent dark:hover:bg-d-accent border-accent dark:border-d-accent border-b-2 p-2 text-center"
                >
                  {section.name}
                </a>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default MenuButton;
