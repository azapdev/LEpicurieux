import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navroutes } from "../Routes/routes";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const NavLinks = [
    {
      path: Navroutes.HOME,
      label: "Home",
    },
    {
      path: Navroutes.MENU,
      label: "Menu",
    },
    {
      path: Navroutes.HISTOIRE,
      label: "Histoire",
    },
    {
      path: Navroutes.MEDIAS,
      label: "Médias",
    },
  ];
  return (
    <>
      <header className="font-myfont fixed top-0 right-0 left-0 z-50 bg-black/50 backdrop-blur-xl">
        {/* PAREnt */}
        <div className="max-w-8xl mx-auto flex items-center justify-between px-8">
          {/* LOGO */}
          <Link to={Navroutes.HOME}>
            <img
              src="img/logo.webp"
              alt=""
              className="size-15 object-contain md:size-25"
              loading="lazy"
            />
          </Link>
          {/* NAV DESKTOP */}
          <div className="hidden px-4 lg:block">
            <nav className="flex items-center justify-between gap-8 md:gap-20">
              {NavLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) =>
                    `mx-4 duration-150 ${isActive ? "border-b-2 border-white" : "text-white"} px-2 py-2 text-center text-white`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="#contact"
                className="mx-4 px-2 py-2 text-center text-white duration-150"
              >
                Contact
              </a>
            </nav>
          </div>
          {/* Toggle */}
          <div
            className="z-20 flex flex-col gap-1 lg:hidden"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <span className="h-1 w-8 cursor-pointer rounded-2xl bg-white text-4xl md:w-10"></span>
            <span className="h-1 w-8 cursor-pointer rounded-2xl bg-white text-4xl md:w-10"></span>
            <span className="h-1 w-8 cursor-pointer rounded-2xl bg-white text-4xl md:w-10"></span>
          </div>
          {/* NAV MOBILE */}
          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 right-0 z-10 flex h-screen w-40 items-center justify-center rounded-2xl backdrop-blur-3xl md:w-60 lg:hidden"
              >
                <nav className="flex flex-col gap-9">
                  {NavLinks.map(({ path, label }, index) => (
                    <NavLink
                      onClick={() => setShowMenu(false)}
                      key={index}
                      to={path}
                      className={({ isActive }) =>
                        `mx-4 duration-150 ${isActive ? "border-b-2 border-white" : ""} px-4 py-2 text-center text-white`
                      }
                    >
                      {label}
                    </NavLink>
                  ))}{" "}
                  <a
                    onClick={() => setShowMenu(false)}
                    href="#contact"
                    className="mx-4 px-2 py-2 text-center text-white duration-150"
                  >
                    Contact
                  </a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
      {/* Blur page */}
      {showMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 right-0 bottom-0 left-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowMenu(false)}
        ></motion.div>
      )}
    </>
  );
};

export default Header;
