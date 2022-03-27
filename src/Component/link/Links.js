import React from 'react';

const Links = (props) => {
    console.log(props)
    const {name, links} =props.route
    return (
        <div>
            <li className='mr-16'>
                <a href={links}>{name}</a>
            </li>
        </div>
    );
};

export default Links;