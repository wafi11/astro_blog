import React from 'react';
import type { Data } from './types';

const Content4 = ({ data,title }: Data) => {
    const filteredArticles = data.articles.filter((item) => (
        item.author && item.content && item.description && item.publishedAt && item.title && item.url && item.urlToImage
    ));

    return (
        <div className='border-t-[2px] border-black w-full h-full pb-[150px]'>
            <div className='bebas font-bold flex mb-5'>
                <h1 className='bg-black text-white w-fit tracking-wider px-4'>{title}</h1>
                <h1 className='text-black tracking-wider px-4'>TOP STORIES IN THE LAST 48 HOURS</h1>
            </div>

            <div className='grid grid-cols-4 gap-4 text-black bebas max-h-[400px]'>
                {filteredArticles.slice(0,4).map((item, idx) => (
                    <div key={idx} className='gap-5 flex flex-col'>
                        <img src={item.urlToImage} alt="/" className='w-full h-[200px] object-cover' />
                        <h1 className=''>{item.author}</h1>
                        <div className=' items-center gap-4 grid'>
                                <h2 className='text-xl font-semibold '>{item.title}</h2>
                                <p className='text-sm bebas'>{item.description}</p>
                                <p className='text-sm text-gray-300'>{new Date(item.publishedAt).toLocaleDateString()}</p>
                                <a href={item.url} target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline text-sm'>Read more</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Content4;
