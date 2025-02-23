import React from 'react';

const Homepage = () => {
    return (
        <div>
            <h1 className="bg-pink-200 text-black p-9">This is the location finder. put a map here</h1>
        </div>
    );
};

console.log('Tailwind test:', window.getComputedStyle(document.body).getPropertyValue('--tw-bg-opacity'));

export default Homepage;