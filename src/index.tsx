import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = "pk.eyJ1IjoibW9yaWxsYTc3NyIsImEiOiJjbDU4eXAzNWswaXVuM2pvanpzdWlrd2xiIn0._978KEf97xOjNZz_oT7MQg";

if( !navigator.geolocation ) {
  const message: string = "Tu navegador no tiene opción de Geolocation";
  alert( message );
  throw new Error( message );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);


