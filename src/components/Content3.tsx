import { format } from 'date-fns';
import React from 'react';
import type { Data } from './types';

const Content3 = ({ data ,title}: Data) => {
    const images = "https://images.unsplash.com/photo-1612550761236-e813928f7271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzc2luZXNzfGVufDB8fDB8fHww"
    const filteredArticles = data.articles.filter((item) => {
        return item.author  && item.description && item.publishedAt && item.title && item.url  && item.urlToImage
      });
    return (
        <div className='border-t-[2px] mt-[50px] border-black h-auto w-full '>
            <h1 className='bg-black text-white px-2 w-fit font-bebas mb-10'>{title}</h1>
            <div className='w-full grid grid-cols-5 gap-5 border-b-[2px] pb-10'>
                <div className='col-span-3 flex items-stretch'>
                    <img src={filteredArticles[1].urlToImage} alt='/' className='w-full h-[400px] object-cover' />
                </div>
                <div className='col-span-2 flex flex-col font-bebas h-full '>
                    <h3 className='text-xl tracking-wider py-2 px-4 mb-4 bg-black w-fit text-white'>{title}</h3>
                    <div className='flex flex-col '>
                    <h1 className='text-4xl font-semibold'>{filteredArticles[1].title}</h1>
                    <h1 className='text-xl py-5 font-normal text-neutral-400 tracking-wider'>
                        <p className=''>
                        {filteredArticles[1].author}
                        </p>
                    </h1>
                    <p className='text-xl font-normal tracking-wider '>{filteredArticles[1].description}</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4 pt-4 bebas'>
                {
                    filteredArticles.slice(2,6).map((item,idx) => (
                        <div key={idx} className='border-r-[2px] flex p-2 w-full'>
                            <div className=''>
                            <p>{format(new Date(item.publishedAt), "dd MMM yyyy")}</p>
                            <h1 className='text-xl'>{item.title}</h1>
                            </div>
                            <img src={item.urlToImage || images} alt="/" className='w-[100px] h-[50px] object-cover'/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Content3;
