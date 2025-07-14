import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  APIProvider,
  ControlPosition,
  MapControl,
  AdvancedMarker,
  Map,
  useMap,
  useMapsLibrary,
  useAdvancedMarkerRef,
  AdvancedMarkerRef
} from '@vis.gl/react-google-maps';

const API_KEY = process.env.REACT_APP_API_KEY;

const SimpleSearchBar: React.FC = () => {
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <APIProvider
      apiKey={API_KEY!}
      solutionChannel='GMP_devsite_samples_v3_rgmautocomplete'>
      <Map
        mapId={'2b41193c36571682'}
        defaultZoom={3}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        style={{ width: '100%', height: '500px' }} // 🛠️ Add height and width
      >
        <AdvancedMarker ref={markerRef} position={null} />
      </Map>
      <MapControl position={ControlPosition.TOP}>
        <div className="autocomplete-control">
          {/* <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />s */}
        </div>
      </MapControl>
      <MapHandler place={selectedPlace} marker={marker} />
    </APIProvider>
  );
};

interface MapHandlerProps {
  place: google.maps.places.PlaceResult | null;
  marker: google.maps.marker.AdvancedMarkerElement | null;
}

const MapHandler = ({ place, marker }: MapHandlerProps) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !place || !marker) return;

    if (place.geometry?.viewport) {
      map.fitBounds(place.geometry?.viewport);
    }
    marker.position = place.geometry?.location;
  }, [map, place, marker]);

  return null;
};

interface PlaceAutocompleteProps {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

const PlaceAutocomplete = ({ onPlaceSelect }: PlaceAutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary('places');
  const [placeAutocomplete, setPlaceAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ['geometry', 'name', 'formatted_address']
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener('place_changed', () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });
  }, [onPlaceSelect, placeAutocomplete]);

  return (
    <div className="autocomplete-container">
      <input 
      className="p-4 ps-10 text-lg text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-accent-500 focus:border-accent-500 dark:bg-accent-700 dark:border-accent-600 dark:placeholder-accent-400 dark:focus:ring-accent-500 dark:focus:border-accent-500"
      ref={inputRef} />
    </div>
  );
};

// const root = createRoot(document.getElementById('simplesearchbar')!);
// root.render(<SimpleSearchBar />);

export default SimpleSearchBar;