import React from 'react';
import Card from './Card';

const Home = ({ data }) => {
    return (
        <div className='container px-4 px-md-5 mt-5'>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <img src="src/assets/GUVI.png" alt="Banner Image" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className="row">
                {data.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Home;
