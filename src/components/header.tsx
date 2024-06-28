import React, { useCallback, useEffect, useState } from 'react';
import '../styles/global.css';
import { motion } from 'framer-motion';
import { postCategory } from '../pages/actions/post.astro';
import { IoSearch } from 'react-icons/io5';

const data = [
  { nama: "Home", link: "/" },
  { nama: "explore", link: "/explore" },
  { nama: "Tredings", link: "/trending" },
  { nama: "Populer", link: "/populer" },
  { nama: "About", link: "/about" }
];

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "techonology"
]

const Headers = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [show,setShow] = useState(false)

  const handleClick = () => {
    setShow(pre => !pre)
  }
  useEffect(() =>   {
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

  return (
    <header className="fixed w-full z-50 bg-gray-50 py-3 text-black">
      <motion.div 
        className=" py-3 flex justify-between items-center  container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      <div className="flex text-xl bebas font-bold text-center gap-6 ">
        <div className='flex gap-2 text-xl '>
          <motion.h1 className="first-letter:text-[40px]" variants={itemVariants}>Astro</motion.h1>
          <motion.h1 className="first-letter:text-[40px]" variants={itemVariants}>Blog</motion.h1>
        </div>
          {data.map((item) => (
            <motion.div
              key={item.link}
              className="first-letter:text-[20px] text-md p-1 text-center w-fit px-4 bebas"
              whileHover={{ background: '#BBE9FF'}}  transition={{ duration: 0.2 }}
              variants={itemVariants}
            >
              <a
                href={item.link}
                className={`${currentPath === item.link ? 'text-black' : ''}`}
              >
                {item.nama}
              </a>
              {currentPath === item.link && (
                <motion.div 
                  className="border-b-[4px] border-solid border-b-[#BBE9FF] "
                  variants={borderVariants}
                />
              )}
            </motion.div>
          ))}
         <motion.div className='bebas relative z-50 ' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
          whileHover={{ background: '#BBE9FF'}}  transition={{ duration: 0.2 }}
          variants={itemVariants}>
            <p className='cursor-pointer px-4 pt-1'>Category</p>
            {show && (
              <div className='absolute bg-white shadow-md rounded-md mt-2 z-50'>
                {categories.map((item) => (
                  <a key={item} href={`category?cat=${item}`} className='block px-4 py-2 hover:bg-gray-200'>{item}</a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
        <motion.div className='relative ' variants={itemVariants}>
            <IoSearch className='left-3 top-3 absolute ' size={20}/>
          <input type="text" 
          className='rounded-full px-10 w-[300px] py-2 focus:outline-none border-[2px] border-neutral-400'
          placeholder='Search...'/>
          <button className='bg-black text-white flex items-center top-0 px-3 py-3 rounded-full absolute right-0 text-sm'>Search</button>
          </motion.div>
      </motion.div>
    </header>
  );
};

export default Headers;
