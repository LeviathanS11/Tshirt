import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirtsData=useLoaderData()
    console.log(tshirtsData);
    return (
        <div>
            <h2>This is home...:{tshirtsData.length}</h2>
        </div>
    );
};

export default Home;