import React, { useEffect, useRef, useState } from 'react';

const YandexMap = () => {
    const mapRef = useRef(null);
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

            const mapInstance = new window.ymaps.Map(mapRef.current, {
                center: [55.751244, 37.618423],
                zoom: 10,
            });

            // Сохранение экземпляра карты в ref для дальнейшего использования
            mapRef.current.mapInstance = mapInstance;

            mapInstance.events.add('click', (e) => {
                const coords = e.get('coords');
                const placemark = new window.ymaps.Placemark(coords, {
                    balloonContent: 'Новая точка',
                });
                mapInstance.geoObjects.add(placemark);

                setPoints((prevPoints) => {
                    const newPoints = [...prevPoints, coords];
                    updateRoute(mapInstance, newPoints);
                    return newPoints;
                });
            });
        };

        const updateRoute = (mapInstance, newPoints) => {
            mapInstance.geoObjects.removeAll();

            // Добавляем метки для всех точек
            newPoints.forEach((point) => {
                const placemark = new window.ymaps.Placemark(point, {
                    balloonContent: 'Точка маршрута',
                });
                mapInstance.geoObjects.add(placemark);
            });

            if (newPoints.length > 1) {
                // Добавляем маршрут между точками
                const multiRoute = new window.ymaps.multiRouter.MultiRoute({
                    referencePoints: newPoints,
                    params: {
                        results: 1
                    }
                }, {
                    boundsAutoApply: true
                });

                mapInstance.geoObjects.add(multiRoute);
            }
        };

        // Проверка на уже загруженный скрипт
        if (!window.ymaps) {
            loadYandexMaps();
        } else {
            initMap();
        }

        return () => {
            if (mapRef.current && mapRef.current.mapInstance) {
                mapRef.current.mapInstance.destroy();
                mapRef.current.mapInstance = null;
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
