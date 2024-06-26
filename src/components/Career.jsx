import React from 'react';
import Card from './Card';

const Career = ({ data }) => {
    const Careerdata = data.filter((item) => item.course === 'Full Stack Development');

    return (
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-4">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    {/* Image on the left side */}
                    <img src="src/assets/Career.png" alt="Image" style={{ maxWidth: '100%', marginBottom: '20px' }} />
                </div>
                <div className="col-md-8">
                    {/* Content on the right side */}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 justify-content-center">
                        {Careerdata.map((item, index) => (
                            <Card key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;

