import React, { useCallback, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { getImageForArticle } from './Images.astro';
import { IoSearch } from "react-icons/io5";
import {motion} from 'framer-motion'

interface Data {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

interface Props {
  data: {
    sources: Data[];
  };
}

enum Category {
  business = 'business',
  health = 'health',
  science = 'science',
  sports = 'sports',
  entertainment = 'entertainment',
}

const categories = Object.values(Category);

const BannerTrending = ({ data }: Props) => {
  const [index, setIndex] = useState(0);

  const datas = data.sources[index];
  const getNextIndex = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.sources.length);
  };

  return (
    <div className="pt-[70px] grid grid-cols-5 h-screen w-full relative">
      <div className="col-span-2 bg-neutral-900 flex flex-col justify-center items-center px-4 gap-10">
        <div className="space-y-4">
          <p className="text-gray-200 text-md text-left font-blog font-bold flex gap-2 items-center">
            {datas.name}
            <span className="rounded-full bg-gray-300 w-2 h-2"></span>
            <span className="text-md">{datas.country}</span>
          </p>
          <h1 className="text-4xl font-bebas text-gray-400"> {datas.description.length > 100 ? `${datas.description.slice(0, 100)}...` : datas.description}
          </h1>
          <h3 className="text-2xl font-bebas text-gray-600">{datas.category}</h3>
          <a
              href={datas.url || '/'}
              className="rounded-full flex items-center gap-4 w-fit px-4 py-2 font-blog bg-gray-300/45 text-white border-blue-800/15 hover:bg-blue-800/45 hover:border-white/20 border-2"
            >
              Read More 
            </a>        
          </div>
        <div className="flex justify-end w-full">
            <button
              onClick={getNextIndex}
              className="rounded-2xl flex items-center gap-4 w-fit px-4 py-2 font-blog  text-white "
                >
              Next <FaArrowRight />
            </button>
        </div>
      </div>
      <div className="col-span-3 w-full h-full">
        <img
          src={getImageForArticle(datas.category, index)}
          alt={datas.name}
          className="h-[500px] w-full object-cover"
        />
      </div>
      <div className='h-[60px] text-black absolute bottom-0  flex w-full'>
        <div className='container bg-gray-100 rounded-t-xl flex justify-between items-center'>
          <h1 className='text-2xl font-bebas font-bold'>Astro Blogs </h1>
          <div className="text-xl text-black flex font-bebas gap-4">
            {categories.map((item) => (
              <motion.div
              key={item}
              className='relative w-full '
            >
              <a
                href={`trending?category=${item}`}
                className='relative z-50 hover:border-b-4 hover:border-black duration-200'
              >
                {item}
              </a>
            </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTrending;
