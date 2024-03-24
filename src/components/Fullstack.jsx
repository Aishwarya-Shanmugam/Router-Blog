import React from 'react';
import Card from './Card';

const Fullstack = ({data}) => {
    const FullStackData = data.filter((item) => item.course === 'Full Stack Development')
    return (
        <div class="container px-4 px-lg-5 mt-5">
            <img src="src/assets/Guvi Banner.png" alt="Banner Image" style={{ marginBottom: '20px' }} /> 
            <div class="row gx-4 gx-lg-4 row-cols-md-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 justify-content-center">
                {FullStackData.map((item, index) => {
                    return (
                        <Card key={index} item={item} />
                    )
                })};
            </div>
        </div>
    )
};

export default Fullstack;
