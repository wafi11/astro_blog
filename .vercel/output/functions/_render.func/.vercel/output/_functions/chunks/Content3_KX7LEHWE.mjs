import { jsxs, jsx } from 'react/jsx-runtime';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

const Content3 = ({ data, title }) => {
  const images = "https://images.unsplash.com/photo-1612550761236-e813928f7271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzc2luZXNzfGVufDB8fDB8fHww";
  return /* @__PURE__ */ jsxs("div", { className: "border-t-2 mt-50 border-black h-auto w-full ", children: [
    /* @__PURE__ */ jsx("h1", { className: "bg-black text-white px-2 w-fit font-bebas mb-10", children: title }),
    /* @__PURE__ */ jsxs("div", { className: "w-full grid grid-cols-5 gap-5 border-b-2 pb-10", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-3 flex items-stretch", children: /* @__PURE__ */ jsx(
        motion.img,
        {
          src: data[0].image,
          alt: "Article main",
          className: "w-full h-400 object-cover",
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 }
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-2 flex flex-col font-bebas", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl tracking-wider py-2 px-4 mb-4 bg-black w-fit text-white", children: title }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx(
            motion.h1,
            {
              className: "text-4xl font-semibold",
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.2, duration: 0.5 },
              children: data[0].title
            }
          ),
          /* @__PURE__ */ jsx(
            motion.h1,
            {
              className: "text-xl py-5 font-normal text-neutral-400 tracking-wider",
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4, duration: 0.5 },
              children: /* @__PURE__ */ jsx("p", { children: data[0].author })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              className: "text-xl font-normal tracking-wider",
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6, duration: 0.5 },
              children: data[0].description
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4", children: data.slice(1, 5).map((item, idx) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "border-r-2 flex  p-2 font-bebas",
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: 0.2 * (idx + 1), duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { children: format(new Date(item.createdAt), "dd MMM yyyy") }),
            /* @__PURE__ */ jsx(
              motion.h1,
              {
                className: "text-xl",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.5 },
                children: item.title
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            motion.img,
            {
              src: item.image || images,
              alt: "Article thumbnail",
              className: "w-[100px] h-[80px] object-cover",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.2 * (idx + 1), duration: 0.5 }
            }
          )
        ]
      },
      idx
    )) })
  ] });
};

export { Content3 as C };
