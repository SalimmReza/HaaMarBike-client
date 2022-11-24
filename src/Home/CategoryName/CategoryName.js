import React from 'react';

const CategoryName = ({ categoryName }) => {
    console.log(categoryName);
    const { category_id, category, img } = categoryName;
    return (
        <div>
            <div className="card w-full shadow-lg image-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center font-extrabold text-3xl">{category}</h2>

                </div>
            </div>
        </div>
    );
};

export default CategoryName;