

import React, { useContext, useLayoutEffect, useRef } from 'react'
import { MapContext, PlacesContext } from '../context'
import { Loading } from './Loading';
import { Map } from 'mapbox-gl';


export const MapView = () => {

   const { isLoading, userLocation } = useContext( PlacesContext );
   const { setMap } = useContext( MapContext );
   const mapDiv = useRef<HTMLDivElement>(null);

   const zoom: number = 10;

   useLayoutEffect( () => {

      if(! isLoading ){
        const map = new Map({
          container: mapDiv.current!, // container ID
          style: 'mapbox://styles/mapbox/streets-v12', // style URL
          center: userLocation, // starting position [lng, lat]
          zoom: zoom, // starting zoom
        });
        setMap( map );
      }
   },[ isLoading ]);

   if( isLoading ){
      return (<Loading/>);
   }

  return (
    <div ref={ mapDiv}
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0
      }}>
      { userLocation?.join(',') }
    </div>
  );
}
