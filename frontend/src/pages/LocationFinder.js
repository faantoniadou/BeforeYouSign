import React from 'react';
import LocationFinderSearchBar from '../components/LocationFinderSearchBar';

const Homepage = () => {
    return (
        <div className="justify-items-center">
            <h1 className="text-black p-9 text-3xl font-bold">Where would you like to live?</h1>
            <LocationFinderSearchBar/>
        </div>
    );
};

// console.log('Tailwind test:', window.getComputedStyle(document.body).getPropertyValue('--tw-bg-opacity'));

export default Homepage;