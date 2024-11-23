import React from 'react';
import { CiSaveDown2, CiShare2 } from "react-icons/ci";
import { Link } from 'react-router-dom';


const NewsCard = ({ news }) => {
    const { rating, total_view, title, author, thumbnail_url, details,_id} = news
    return (
        <div className='space-y-3 my-5 '>
            {/* author details */}
            <div className='flex justify-between items-center bg-gray-200'>
                <div className='flex items-center gap-2'>
                    <img className='w-16 rounded-full' src={author.img} alt="" />
                    <div>
                        <h4>{author.name}</h4>
                        <h4>{author.published_date}</h4>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <CiSaveDown2 className='text-xl'></CiSaveDown2>
                    <CiShare2 className='text-xl'></CiShare2 >
                </div>
            </div>
            {/* title */}
            <h2 className='text-xl font-bold'>{title}</h2>
            <div>
            <img className='w-full  h-[250px]' src={thumbnail_url} alt="" />
            <p className='mb-3'>
                {details.slice(0,300)}
                <Link to={`/news/${_id}`} className='btn btn-outline ml-4'>Read more</Link>
            </p>
            <hr />
            <div className='flex justify-between'>
                <span>{rating.number}</span>
                <span>{total_view}</span>
            </div>
            </div>
        </div>
    );
};

export default NewsCard;