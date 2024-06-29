import { useEffect, useRef, useState } from 'react';

const YandexMap = () => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const [points, setPoints] = useState([]);
    const [routeInfo, setRouteInfo] = useState('');

    useEffect(() => {
        const loadYandexMaps = () => {
            const script = document.createElement('script');
            script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=721cf978-9af7-447c-9304-062af4e3fd69';
            script.type = 'text/javascript';
            script.onload = () => {
                window.ymaps.ready(initMap);
            };
            document.head.appendChild(script);
        };

        const initMap = () => {
            if (!mapRef.current || mapInstanceRef.current) return;

            const mapInstance = new window.ymaps.Map(mapRef.current, {
                center: [55.751244, 37.618423],
                zoom: 10,
            });

            mapInstanceRef.current = mapInstance;

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
            newPoints.forEach((point, index) => {
                const placemark = new window.ymaps.Placemark(point, {
                    balloonContent: `Точка маршрута ${index + 1}`,
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

                multiRoute.model.events.add('requestsuccess', () => {
                    const activeRoute = multiRoute.getActiveRoute();
                    if (activeRoute) {
                        const length = activeRoute.properties.get("distance").text;
                        const duration = activeRoute.properties.get("duration").text;
                        setRouteInfo(`Маршрут: ${length}, Время: ${duration}`);
                    }
                });

                mapInstance.geoObjects.add(multiRoute);
            } else {
                setRouteInfo('');
            }
        };

        // Проверка на уже загруженный скрипт
        if (!window.ymaps) {
            loadYandexMaps();
        } else {
            window.ymaps.ready(initMap);
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
            {routeInfo && <p>{routeInfo}</p>}
        </div>
    );
};

export default YandexMap;
