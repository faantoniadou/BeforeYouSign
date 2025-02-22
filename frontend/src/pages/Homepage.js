import React from 'react';

const Homepage = () => {
    return (
        <div>
            <h1 className="bg-red-500 text-white p-4">Home Page does nt</h1>
        </div>
    );
};

console.log('Tailwind test:', window.getComputedStyle(document.body).getPropertyValue('--tw-bg-opacity'));

export default Homepage;