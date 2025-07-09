import React, { useState, useEffect, useRef } from 'react';
import LocationFinderSearchBar from '../components/LocationFinderSearchBar';
import LocationFinderMap from '../components/LocationFinderMap';
import { useMap, 
  APIProvider, 
  ControlPosition, 
  MapControl, 
  AdvancedMarker, 
  Map, 
  useMapsLibrary, 
  useAdvancedMarkerRef } from '@vis.gl/react-google-maps';


const LocationFinder: React.FC = () => {
    const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);
    
    return (
        <APIProvider
        apiKey={process.env.REACT_APP_API_KEY!}
        libraries={['places']}
        solutionChannel='GMP_devsite_samples_v3_rgmautocomplete'>
            <div className="justify-items-center">
                <h1 className="text-black p-5 text-3xl font-bold pt-10">Let's find your ideal place to live.</h1>
                <h1 className="text-black p-4 text-xl">Enter the places you go to regularly and what matters to you.</h1>
                <LocationFinderSearchBar onPlaceSelect={setSelectedPlace} />
                {/* {selectedPlace && <LocationFinderMap place={selectedPlace} />} */}
                {/* <SimpleSearchBar/> */}
                {/* <LocationFinderMap /> */}
            </div>
        </APIProvider>
    )
};

export default LocationFinder;