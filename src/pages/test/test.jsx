import React, { useEffect, useRef, useState } from 'react';

const YandexMap = () => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const [points, setPoints] = useState([]);

    useEffect(() => {
        const loadYandexMaps = () => {
            const script = document.createElement('script');
            script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=YOUR_API_KEY';
            script.type = 'text/javascript';
            script.onload = () => {
                window.ymaps.ready(initMap);
            };
            document.head.appendChild(script);
        };

        const initMap = () => {
            if (!mapRef.current) return;

            mapInstanceRef.current = new window.ymaps.Map(mapRef.current, {
                center: [55.751244, 37.618423],
                zoom: 10,
            });

            mapInstanceRef.current.events.add('click', (e) => {
                const coords = e.get('coords');
                const placemark = new window.ymaps.Placemark(coords, {
                    balloonContent: 'Новая точка',
                });
                mapInstanceRef.current.geoObjects.add(placemark);

                setPoints((prevPoints) => {
                    const newPoints = [...prevPoints, coords];
                    updateRoute(newPoints);
                    return newPoints;
                });
            });
        };

        const updateRoute = (newPoints) => {
            if (mapInstanceRef.current) {
                // Очищаем только маршруты, оставляя метки
                mapInstanceRef.current.geoObjects.each((geoObject) => {
                    if (geoObject.geometry.getType() === 'LineString') {
                        mapInstanceRef.current.geoObjects.remove(geoObject);
                    }
                });

                if (newPoints.length > 1) {
                    // Добавляем маршрут между точками
                    const multiRoute = new window.ymaps.multiRouter.MultiRoute({
                        referencePoints: newPoints,
                        params: {
                            results: 1,
                        },
                    }, {
                        boundsAutoApply: true,
                    });

                    mapInstanceRef.current.geoObjects.add(multiRoute);
                }
            }
        };

        if (!window.ymaps) {
            loadYandexMaps();
        } else {
            initMap();
        }

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.destroy();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <div>
            <h1>Yandex Map</h1>
            <div ref={mapRef} style={{ width: '100%', height: '500px' }}></div>
        </div>
    );
};

export default YandexMap;
