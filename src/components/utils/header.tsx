import React, { useEffect, useState } from "react";
import "../styles/global.css";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { Category } from "../banner/BannerTrending";
import Search from "./Search";

const data = [
  { nama: "Home", link: "/" },
  {
    nama: "Category",
    link: "/category",
    subMenu: [
      { nama: Category.national},
      { nama: Category.politics },
      { nama: Category.health },
      { nama: Category.sports },
      { nama: Category.world },
    ],
  },
  { nama: "Explore", link: "/explore" },
  { nama: "Trending", link: "/trending" },
  { nama: "Popular", link: "/popular" },
];

const Headers = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [show, setShow] = useState(false);
  const [mb, setMb] = useState(false);
  const [showing, setShowing] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = () => {
    setShowing((prev) => !prev);
  };


  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const borderVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <header className="fixed w-full z-50 bg-gray-100 py-3 text-black">
      <motion.div
        className="flex justify-between items-center px-10 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center text-xl bebas font-bold text-center gap-3">
          <div className="flex gap-2 text-4xl">
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} className="mb-2"/>}
          </button>
            <motion.h1 className="" variants={itemVariants}>
              Astro
            </motion.h1>
            <motion.h1 className="" variants={itemVariants}>
              Blog
            </motion.h1>
          </div>
        </div>
        <div
          className={`md:flex items-center gap-3 ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          {data.map((item) => (
            <motion.div
              key={item.link}
              className="relative  text-2xl   p-1 text-center w-fit px-4 bebas hidden md:block"
              whileHover={{ background: "#BBE9FF" }}
              transition={{ duration: 0.2 }}
              variants={itemVariants}
              onMouseEnter={() => item.subMenu && setShow(true)}
              onMouseLeave={() => item.subMenu && setShow(false)}
            >
              <a
                href={item.link}
                className={`${currentPath === item.link ? "text-black" : ""}`}
              >
                {item.nama}
              </a>
              {currentPath === item.link && (
                <motion.div
                  className="border-b-[4px] border-solid border-b-[#BBE9FF]"
                  variants={borderVariants}
                />
              )}
              {show && item.subMenu && (
                <div className="absolute bg-white shadow-md w-[200px] rounded-md mt-2 z-50 -right-16">
                  {item.subMenu.map((subItem) => (
                    <a
                      key={subItem.nama}
                      href={`category?cat=${subItem.nama}`}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      {subItem.nama}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="lg:block hidden">
        <Search />
        </div>
        <button
          className="rounded-full w-10 h-10 ring-2 ring-gray-200 shadow-xl"
          onClick={handleClick}
        >
          <img
            src={'/src/assets/placeholder.jpg'}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </button>
        {showing && (
          <div className="absolute top-16 w-40 bg-gray-400 shadow-md rounded-md z-50 right-0">
            <div className="p-4 grid gap-4 font-bebas">
              <a href="/profile" className="hover:bg-gray-200 hover:border-gray-200 border-2 bg-gray-300 border-gray-200 rounded-md px-1">
                User Profile
              </a>
              <p className="hover:bg-gray-200 hover:border-gray-200 border-2 bg-gray-300 border-gray-200 rounded-md px-1">
                Settings
              </p>
              <p className="hover:bg-gray-200 hover:border-gray-200 border-2 bg-gray-300 border-gray-200 rounded-md px-1">
                Logout
              </p>
            </div>
          </div>
        )}
      </motion.div>
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-16 left-0 right-0 bg-gray-100 z-40 p-4"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <Search />
          <div className="flex leading-none py-4">
            {data.map((item) => (
              <motion.div
                key={item.link}
                className="relative first-letter:text-[20px] text-md p-1 text-center w-fit px-4 bebas "
                whileHover={{ background: "#BBE9FF" }}
                onMouseEnter={() => setMb(true)}
                onMouseLeave={() => setMb(false)}
                transition={{ duration: 0.2 }}
                variants={itemVariants}
              >
                <a
                  href={item.link}
                  className={`leading-none ${currentPath === item.link ? "text-black" : ""}`}
                >
                  {item.nama}
                </a>
                {currentPath === item.link && (
                  <motion.div
                    className="border-b-[4px] border-solid border-b-[#BBE9FF]"
                    variants={borderVariants}
                  />
                )}
                {mb && item.subMenu && (
                  <div className="mt-2 z-10 grid">
                    {item.subMenu.map((subItem) => (
                      <a
                        key={subItem.nama}
                        href={`category?cat=${subItem.nama}`}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {subItem.nama}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Headers;
