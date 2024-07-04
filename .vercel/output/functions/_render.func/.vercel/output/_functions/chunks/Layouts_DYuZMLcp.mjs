import { m as createComponent, n as renderTemplate, p as addAttribute, q as createAstro, t as renderComponent, u as renderHead, v as renderSlot } from './astro/server_CyOu4KzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { FaFacebook, FaArrowRight, FaTimes, FaBars } from 'react-icons/fa';
import Lenis from 'lenis';
import { FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';
/* empty css                        */
import { motion } from 'framer-motion';
import { IoSearchCircle } from 'react-icons/io5';
import 'clsx';

const data$1 = [
  {
    nama: "General",
    sub: [
      { nama: "Home", link: "/" },
      { nama: "About", link: "/about" },
      { nama: "Contact", link: "/contact" }
    ]
  },
  {
    nama: "Blog",
    sub: [
      { nama: "Hot News", link: "/hotnews" },
      { nama: "Trending", link: "/trending" },
      { nama: "Popular", link: "/popular" }
    ]
  },
  {
    nama: "Social Link",
    icons: [
      {
        nama: /* @__PURE__ */ jsx(FaFacebook, { "aria-label": "Facebook" }),
        link: "https://www.facebook.com"
      },
      {
        nama: /* @__PURE__ */ jsx(FaXTwitter, { "aria-label": "Twitter" }),
        link: "https://www.twitter.com"
      },
      {
        nama: /* @__PURE__ */ jsx(FaInstagram, { "aria-label": "Instagram" }),
        link: "https://www.instagram.com"
      },
      {
        nama: /* @__PURE__ */ jsx(FaLinkedin, { "aria-label": "LinkedIn" }),
        link: "https://www.linkedin.com"
      }
    ]
  }
];
const Footer = () => {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "relative ", children: /* @__PURE__ */ jsx("div", { className: "h-[500px] sticky bottom-0", children: /* @__PURE__ */ jsxs("div", { className: "px-8 pt-12 bg-gray-900 w-full flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-5 gap-10 px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "flex gap-10 col-span-3", children: data$1.slice(0, 2).map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "uppercase text-white", children: item.nama }),
        item.sub.map((subItem, subIdx) => /* @__PURE__ */ jsx(
          "a",
          {
            href: subItem.link,
            className: "text-white hover:underline",
            children: subItem.nama
          },
          subIdx
        ))
      ] }, idx)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 col-span-2 text-white", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl bebas ", children: "Astro Blog" }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: data$1[2].icons.map((item, idx) => /* @__PURE__ */ jsx("a", { href: item.link, className: "text-white text-2xl", children: item.nama }, idx)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mt-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-[14vw] text-white", children: "Astro Blog" }),
      /* @__PURE__ */ jsx("p", { className: "text-white", children: "Copyright © 2024" })
    ] })
  ] }) }) });
};

var Category = /* @__PURE__ */ ((Category2) => {
  Category2["national"] = "national";
  Category2["world"] = "world";
  Category2["crime"] = "Crime";
  Category2["politics"] = "Politics";
  Category2["health"] = "Health";
  Category2["sports"] = "sports";
  return Category2;
})(Category || {});
const categories = Object.values(Category);
const BannerTrending = ({ data, categorys }) => {
  const [index, setIndex] = useState(0);
  const datas = data[index];
  console.log(datas);
  const getNextIndex = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };
  return /* @__PURE__ */ jsxs("div", { className: " grid grid-cols-5 h-screen w-full relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-5 md:col-span-2 bg-neutral-900 flex flex-col justify-center items-center px-4 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-gray-200 text-md text-left font-blog font-bold flex gap-2 items-center", children: [
          datas.title,
          /* @__PURE__ */ jsx("span", { className: "rounded-full bg-gray-300 w-2 h-2" }),
          /* @__PURE__ */ jsx("span", { className: "text-md", children: datas.category })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-6xl font-bebas text-gray-400", children: [
          " ",
          datas.description.length > 100 ? `${datas.description.slice(0, 100)}...` : datas.description
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bebas text-gray-600", children: datas.category }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: datas.url || "/",
            className: "rounded-full flex items-center gap-4 w-fit px-4 py-2 font-blog bg-gray-300/45 text-white border-blue-800/15 hover:bg-blue-800/45 hover:border-white/20 border-2",
            children: "Read More"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end w-full", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: getNextIndex,
          className: "rounded-2xl flex items-center gap-4 w-fit px-4 py-2 font-blog  text-white ",
          children: [
            "Next ",
            /* @__PURE__ */ jsx(FaArrowRight, {})
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "col-span-3 md:block hidden h-screen w-full ", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: datas.image,
        alt: datas.title,
        className: "h-full w-full object-cover  -z-10"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "h-[60px] text-black absolute bottom-0 z-10  flex w-full", children: /* @__PURE__ */ jsxs("div", { className: "container bg-gray-100 rounded-t-xl flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bebas font-bold", children: "Astro Blogs " }),
      /* @__PURE__ */ jsx("div", { className: " text-black grid-cols-8 grid font-bebas gap-4 items-end place-content-end", children: categories.map((item) => /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "relative w-full ",
          children: /* @__PURE__ */ jsx(
            "a",
            {
              href: `trending?category=${item}`,
              className: " relative z-50 hover:border-b-4 hover:border-black duration-200",
              children: item
            }
          )
        },
        item
      )) })
    ] }) })
  ] });
};

const Search = () => {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInput(newValue);
  };
  const handleClick = () => {
    window.location.href = `/search?q=${input}`;
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center w-full md:w-[400px] relative", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        value: input,
        onChange: handleInputChange,
        placeholder: "Search...",
        className: "px-4 py-2 w-full md:w-[500px] rounded-full focus:outline-none"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.button,
      {
        className: "absolute right-0 text-gray-300",
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.9 },
        onClick: handleClick,
        children: /* @__PURE__ */ jsx(IoSearchCircle, { size: 40 })
      }
    )
  ] });
};

const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("/api/profile", {
          method: "GET"
        });
        if (!response.ok) {
          throw new Error("Failed to fetch user profile");
        }
        const userData = await response.json();
        setUserProfile(userData);
        setError(null);
      } catch (error2) {
        setUserProfile(null);
        setError(error2.message);
      }
    };
    fetchUserProfile();
  }, []);
  return { userProfile, error };
};

const data = [
  { nama: "Home", link: "/" },
  {
    nama: "Category",
    link: "/category",
    subMenu: [
      { nama: Category.national },
      { nama: Category.politics },
      { nama: Category.health },
      { nama: Category.sports },
      { nama: Category.world }
    ]
  },
  { nama: "Explore", link: "/explore" },
  { nama: "Trending", link: "/trending" },
  { nama: "Popular", link: "/popular" }
];
const handleLogout = async () => {
  try {
    const res = await fetch("/api/logout", {
      method: "POST"
    });
    if (!res.ok) {
      throw new Error("Internal Serser Erorr");
    }
    alert("Berhasil");
  } catch {
    console.log("Internal Server Errorr");
  }
};
const Headers = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [show, setShow] = useState(false);
  const [mb, setMb] = useState(false);
  const [showing, setShowing] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { userProfile, error } = useUserProfile();
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
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };
  const borderVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.5
      }
    }
  };
  return /* @__PURE__ */ jsxs("header", { className: "fixed w-full z-50 bg-gray-100 py-3 text-black", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "flex justify-between items-center px-10 ",
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center text-xl bebas font-bold text-center gap-3", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2 text-4xl", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "md:hidden",
                onClick: () => setMobileMenuOpen(!mobileMenuOpen),
                children: mobileMenuOpen ? /* @__PURE__ */ jsx(FaTimes, { size: 24 }) : /* @__PURE__ */ jsx(FaBars, { size: 24, className: "mb-2" })
              }
            ),
            /* @__PURE__ */ jsx(motion.h1, { className: "", variants: itemVariants, children: "Astro" }),
            /* @__PURE__ */ jsx(motion.h1, { className: "", variants: itemVariants, children: "Blog" })
          ] }) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `md:flex items-center gap-3 ${mobileMenuOpen ? "block" : "hidden"}`,
              children: data.map((item) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "relative  text-2xl   p-1 text-center w-fit px-4 bebas hidden md:block",
                  whileHover: { background: "#BBE9FF" },
                  transition: { duration: 0.2 },
                  variants: itemVariants,
                  onMouseEnter: () => item.subMenu && setShow(true),
                  onMouseLeave: () => item.subMenu && setShow(false),
                  children: [
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: item.link,
                        className: `${currentPath === item.link ? "text-black" : ""}`,
                        children: item.nama
                      }
                    ),
                    currentPath === item.link && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "border-b-[4px] border-solid border-b-[#BBE9FF]",
                        variants: borderVariants
                      }
                    ),
                    show && item.subMenu && /* @__PURE__ */ jsx("div", { className: "absolute bg-white shadow-md w-[200px] rounded-md mt-2 z-50 -right-16", children: item.subMenu.map((subItem) => /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: `category?cat=${subItem.nama}`,
                        className: "block px-4 py-2 hover:bg-gray-200",
                        children: subItem.nama
                      },
                      subItem.nama
                    )) })
                  ]
                },
                item.link
              ))
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "lg:block hidden", children: /* @__PURE__ */ jsx(Search, {}) }),
          userProfile ? /* @__PURE__ */ jsx(
            "button",
            {
              className: "rounded-full w-10 h-10 ring-2 ring-gray-200 shadow-xl",
              onClick: handleClick,
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/src/assets/placeholder.jpg",
                  alt: "Profile",
                  className: "w-full h-full object-cover rounded-full"
                }
              )
            }
          ) : /* @__PURE__ */ jsx("a", { href: "/users", className: "rounded-md px-4 py-2 border-[3px] border-black hover:bg-black hover:text-white w-fit text-xl  font-bebas items-center", children: "Login" }),
          showing && /* @__PURE__ */ jsx("div", { className: "absolute top-16 w-40 bg-gray-400 shadow-md rounded-md z-50 right-0", children: /* @__PURE__ */ jsxs("div", { className: "p-4 grid gap-4 font-bebas", children: [
            /* @__PURE__ */ jsx("a", { href: "/profile", className: "hover:bg-gray-200 hover:border-gray-200 border-2 bg-gray-300 border-gray-200 rounded-md px-1", children: "User Profile" }),
            /* @__PURE__ */ jsx("p", { className: "hover:bg-gray-200 hover:border-gray-200 border-2 bg-gray-300 border-gray-200 rounded-md px-1", children: "Settings" }),
            /* @__PURE__ */ jsx("button", { onClick: handleLogout, className: "hover:bg-gray-200 hover:border-gray-200 border-2 bg-gray-300 border-gray-200 rounded-md px-1", children: "Logout" })
          ] }) })
        ]
      }
    ),
    mobileMenuOpen && /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "md:hidden absolute top-16 left-0 right-0 bg-gray-100 z-40 p-4",
        initial: { height: 0 },
        animate: { height: "auto" },
        transition: { duration: 0.3 },
        children: [
          /* @__PURE__ */ jsx(Search, {}),
          /* @__PURE__ */ jsx("div", { className: "flex leading-none py-4", children: data.map((item) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "relative first-letter:text-[20px] text-md p-1 text-center w-fit px-4 bebas ",
              whileHover: { background: "#BBE9FF" },
              onMouseEnter: () => setMb(true),
              onMouseLeave: () => setMb(false),
              transition: { duration: 0.2 },
              variants: itemVariants,
              children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: item.link,
                    className: `leading-none ${currentPath === item.link ? "text-black" : ""}`,
                    children: item.nama
                  }
                ),
                currentPath === item.link && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "border-b-[4px] border-solid border-b-[#BBE9FF]",
                    variants: borderVariants
                  }
                ),
                mb && item.subMenu && /* @__PURE__ */ jsx("div", { className: "mt-2 z-10 grid", children: item.subMenu.map((subItem) => /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: `category?cat=${subItem.nama}`,
                    className: "block px-4 py-2 hover:bg-gray-200",
                    children: subItem.nama
                  },
                  subItem.nama
                )) })
              ]
            },
            item.link
          )) })
        ]
      }
    )
  ] });
};

const $$Astro$1 = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/img1.avif" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "D:/astroblog/src/components/utils/BaseHead.astro", void 0);

const $$Astro = createAstro();
const $$Layouts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layouts;
  const { title, description, createdAt, updatedDate, image } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body> ${renderComponent($$result, "Headers", Headers, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/astroblog/src/components/utils/header", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/astroblog/src/components/utils/Footer", "client:component-export": "default" })} </body></html>`;
}, "D:/astroblog/src/layouts/Layouts.astro", void 0);

export { $$Layouts as $, BannerTrending as B, useUserProfile as u };
