import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import markerIcon from '../../assets/markerIcon.png';

const MapComponent = () => {
    const api = "6a0ac739-9002-49e6-890d-186091d5a496";
    return (
        <YMaps query={{ apikey: api }}>
            <Map 
            defaultState={
                {
                    center: [47.237346, 39.740056],
                    zoom: 17,
                }
            } 
            className='flex justify-center rounded-2xl px-5 mb-[30px] h-60 xl:px-[50px] 2xl:px-[50px] xl:w-full sm:h-[400px] xl:h-[800px] 2xl:h-[975px] lg:mt-[100px] xl:mt-[150px]'
            modules={ [ 'geoObject.addon.balloon', 'geoObject.addon.hint' ] }
            >
                <Placemark 
                    geometry={[47.237346, 39.740056]}
                    properties={{
                        balloonContent: '<strong>Auto Light</strong><br>кредитный брокер',
                    }}
                    options={{
                        balloonPanelMaxMapArea: 0, // балун всегда будет полностью отображаться на карте
                        iconLayout: 'default#image',
                        iconImageHref: markerIcon, //изображение
                        iconImageSize: [64, 64], // размер 
                        iconImageOffset: [-25, -55], //смещение
                    }}
                />
            </Map>
        </YMaps>
    );
}

export default MapComponent;
