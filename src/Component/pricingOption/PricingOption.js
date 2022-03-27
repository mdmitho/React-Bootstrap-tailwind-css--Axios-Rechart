import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';


const PricingOption = (props) => {
    const {name,price,benefits} = props.option
    return ( 
        <div className='bg-white p-4 rounded-lg'>
         
            <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold '>{name}</h2>
            <p >
                
                <span className='text-4xl font-bold'>Price : {price}</span>
                <span className='text-xl font-bold text-gray-500'>/m</span>
                </p>
                <div className="">
                    <h3 className='text-xl text-left'>Benefits: </h3>
                     {
                         benefits.map(benefit => <Benefit 
                            benefit={benefit}
                            ></Benefit>)
                     }
                </div>
                <div className="">
        <button className='bg-green-500 flex justify-center w-full py-2 rounded mt-6 text-white hover:bg-indigo-400 font-bold'>Buy Now
            <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon></button>
    </div>
        </div>
    );
};

export default PricingOption;