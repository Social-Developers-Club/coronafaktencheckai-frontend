import React, { useState , useEffect, useRef} from 'react';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { AccesTokenMapBox , initialData} from '../data/Data'
import {fakeNewsData} from '../data/fake-news-mock-data' 


const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute"
};

const formatPercentage = ((num)=> (num * 100).toFixed(2));

//Map component
export const DetailedMap = () => {

  mapboxgl.accessToken = AccesTokenMapBox;

  const formatGeoLocation = (locationCoordinates => {
    return(
      [
        locationCoordinates.locations[0].geo.coordinates[1],
        locationCoordinates.locations[0].geo.coordinates[0],
    ]  
    )
  })

  // Load inital map point to display
  const [mapData] = useState(initialData);
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);


  // console.log([mapData.lat, mapData.lng]);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/binicodes/ck81trptb122y1iqsw95p78j0/draft', // stylesheet location
        center: [ mapData.lng , mapData.lat],
        zoom: mapData.zoom
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
        map.addControl(new mapboxgl.NavigationControl());
      
        const locations = 
          {
            type: 'FeatureCollection',
            features: fakeNewsData.map(fakeNews => {
              return{
                type:"Feature",
                properties: {
                  description:`
                  <h2>Fake News:</h2>
                  <h3><q>${fakeNews.text}</q></h3>
                  <p>Es handelt sich hierbei zu <b style="color: #ff9046"> ${formatPercentage(fakeNews.classification.fake)} % </b> um Fake News</p>
                  `    
                  },
                geometry: {
                    type: 'Point',
                    coordinates: formatGeoLocation(fakeNews.derived) 
                },
              }
            })
          }

        map.addSource('point', {
            'type': 'geojson',
            'data': locations
          });
          
        map.addLayer({
        'id': 'point',
        'source': 'point',
        'type': 'circle',
        paint:  {
          'circle-radius': 4,
          'circle-color': '#ff9a00',
          'circle-stroke-color': '#ff9046',
          'circle-stroke-width': 2,
          'circle-opacity': 0.5,
          }
        });

        const popup = new mapboxgl.Popup({ closeOnClick: false ,closeButton: false});
      
        map.on("mouseenter", 'point', (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice();
          const description = e.features[0].properties.description;

          map.getCanvas().style.cursor = "pointer";
      
          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
          
          popup
          .setLngLat(coordinates)
          .setHTML(description)
            // .setText()
          .addTo(map);
        });

        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'point', function() {
          map.getCanvas().style.cursor = 'pointer';
          });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'point', function() {
          map.getCanvas().style.cursor = '';
          popup.remove();
        });

        // Disable default scrollZoom on map
        const disableMapZoom = () => {
          map.scrollZoom.disable();
        }
        disableMapZoom();

        // Toggle scrollZoom with click event
        map.on('click', () => {
          (!map.scrollZoom.isEnabled()) ? map.scrollZoom.enable() : disableMapZoom();
        });
      })
    }  
  if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
       <div ref={el => (mapContainer.current = el)} style={styles} />
  )
}