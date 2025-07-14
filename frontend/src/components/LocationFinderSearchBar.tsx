import { useEffect, useRef, useState } from "react";
import { useMap, 
  APIProvider, 
  ControlPosition, 
  MapControl, 
  AdvancedMarker, 
  Map, 
  useMapsLibrary, 
  useAdvancedMarkerRef } from '@vis.gl/react-google-maps';


interface LocationFinderSearchBarProps {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

const LocationFinderSearchBar = ({ onPlaceSelect }: LocationFinderSearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary('places'); 
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.Autocomplete | null>(null);
  const [markerRef, marker] = useAdvancedMarkerRef();

  useEffect(() => {
    if (!places || !inputRef.current || !window.google) return;

    const options = {
      fields: ['geometry', 'name', 'formatted_address'],
    };

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, options);
    setSelectedPlace(autocomplete);

  }, [places]);

  useEffect(() => {
      if (!selectedPlace) return;

    selectedPlace.addListener('place_changed', () => {
      onPlaceSelect(selectedPlace.getPlace());
    });
  }, [onPlaceSelect, selectedPlace]);

  return (
    <form className="max-w-md mx-auto ps-10 pb-5 pt-9" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none">
          {/* Optional: Add search icon */}
        </div>
        <div className="autocomplete-container">
          <input
            ref={inputRef}  // Important: Ref to the input element for Autocomplete
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-lg text-gray-500 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-accent-500 focus:border-accent-500 dark:bg-accent-700 dark:border-accent-600 dark:placeholder-accent-400 dark:focus:ring-accent-500 dark:focus:border-accent-500"
            placeholder="Search Location..."
            required
          />
        </div>
        <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-large h-full text-white bg-mint-500 rounded-e-2xl border border-mint-500 hover:mint-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-custom-accent dark:hover:bg-custom-accent-500 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
      </div>
    </form>
  );
};

export default LocationFinderSearchBar;
