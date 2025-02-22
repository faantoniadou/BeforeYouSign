import React from 'react';

const Homepage = () => {
    return (
        <div>
            <h1 className="bg-pink-500 text-black p-4">Home Page does nt</h1>
        </div>
    );
};

console.log('Tailwind test:', window.getComputedStyle(document.body).getPropertyValue('--tw-bg-opacity'));

export default Homepage;