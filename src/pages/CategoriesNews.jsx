import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoriesNews = () => {
    const {data:news} = useLoaderData();
    console.log(news.length)
    return (
        <div>
            <h2 className='font-semibold mb-3'>Dragon News Home</h2>
            <div className=''>
                {
                    news.map(singleNews=><NewsCard key={singleNews._id} news ={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoriesNews;