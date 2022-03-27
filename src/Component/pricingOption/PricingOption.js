import React from 'react';

const PricingOption = (props) => {
    const {name,price} = props.option
    return (
        <div className='bg-white p-4 rounded-lg'>
            <p >
                
                <span className='text-4xl font-bold'>Price : {price}</span>
                <span className='text-xl font-bold text-gray-500'>/m</span>
                </p>
            <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold '>{name}</h2>
        </div>
    );
};

export default PricingOption;