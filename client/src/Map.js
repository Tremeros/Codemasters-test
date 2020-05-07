import React, {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import marker from './images/marker.png';

export const Map = () => {
    

    const longitude=19.443990; 
    const latitude= 51.822370;
    
    const [viewport, setViewport] = useState({
        latitude: 51.759048,
        longitude: 19.458599,
        width: '100vw',
        height: '100vh',
        zoom: 10
    });

   

    return (
        <div>
            <ReactMapGL {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle='mapbox://styles/gachette/ck9uctytk02j01iqva06xpvtb'
             onViewportChange={viewport => {setViewport(viewport);}}
            >
              <Marker key={0} latitude={latitude} longitude={longitude}>
                <img src={marker} alt="" class="logo-img"/>
              </Marker>
            </ReactMapGL>
        </div>
    )
};

export default Map;
