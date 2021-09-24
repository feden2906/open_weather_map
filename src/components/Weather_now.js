import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getForecastByLocation } from "../services";
import { setCity, setWeather } from "../redux";

export const Weather_now = () => {
    const dispatch = useDispatch();

    const {weather, city, userLocation} = useSelector(({weather, location}) => ({ ...weather, ...location }));

    useEffect(() => {
        if(!city && userLocation) {
            (async () => {
                const response = await getForecastByLocation(userLocation.latitude, userLocation.longitude);

                dispatch(setWeather(response.list));
                dispatch(setCity(response.city));
            })()
        }
    }, [userLocation]);


    return (
        <div>

        </div>
    );
}
