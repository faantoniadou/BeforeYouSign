import React from 'react';
import {createRoot} from "react-dom/client";
import LocationFinderSearchBar from '../components/LocationFinderSearchBar';
import SimpleSearchBar from './SImpleSearch';
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

const LocationFinderMap: React.FC = () => {
  return (
    <div className="h-[600px] w-full rounded-full"> {/* Add height */}
      <APIProvider 
      apiKey={process.env.REACT_APP_API_KEY!} 
      libraries={['places']}
      solutionChannel='GMP_devsite_samples_v3_rgmautocomplete'
      onLoad={() => console.log('Maps API has loaded.')}>
        <Map
          className="h-full w-full" // Ensure the Map component also takes full size
          defaultZoom={13}
          defaultCenter={{ lat: 51.51091, lng: -0.11940 }}
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
          }
          id='2b41193c36571682'
        />
      </APIProvider>
    </div>
  );
};


export default LocationFinderMap;