import React, { useEffect, useState } from 'react';
import Banner from '../Banner';
import Heading from '../Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/computer/Categories';
import { Helmet } from 'react-helmet';

const Home = () => {

    const [computers, setComputer] = useState([])

    useEffect(()=>{
        fetch('./computer.json')
        .then(res => res.json())
        .then(data => setComputer(data))
    }
        ,[])

    const categories = useLoaderData()
    return (
        
       <div>
        <Helmet>
            <title>Home | Gadget Heaven</title>
        </Helmet>
         <div className='bg-[#9538E2] py-10 sm:py-32 sm:mb-52  w-11/12 mx-auto text-center'>
            {/* heading */}
            <Heading title='Upgrade Your Tech Accessorize with Gadget Heaven Accessories' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all'></Heading>
            {/* banner */}
            <Banner></Banner>
            {/* computer zone */}
        </div>
        {/* main section */}
        <div className='mx-auto bg-gray-50 p-10'>
        <h2 className='text-3xl text-center font-semibold py-10'>Explore Cutting-Edge Gadgets</h2>
        <div className='grid sm:grid-cols-4 gap-4'>
        <div className='col-span-1'>
            <Categories categories={categories}></Categories>
        </div>
        <div className='col-span-3 grid grid-cols-3 gap-3'>
            <Outlet></Outlet>
        </div>
       </div>
       </div>
        </div>
        
    );
};

export default Home;