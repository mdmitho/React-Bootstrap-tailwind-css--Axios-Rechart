import React from 'react';
import PricingOption from '../pricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions =[
        {id:1, name:'free', price: 10},
        {id:2, name:'Regular', price: 9.88},
        {id:3, name:'Premium', price: 9.99},
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-medium text-red-500'>Best Deals of the Town</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi beatae atque dolor asperiores in consequatur unde fugit at quibusdam, voluptatum tempore repellat cum illo consectetur. Voluptatem aspernatur iure adipisci quia.</p>
            <div className="grid gap-3 mt-8 md:grid-cols-3">
                {
                    pricingOptions.map(option => <PricingOption
                    key={option.id}
                    option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;