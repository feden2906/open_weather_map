import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Header, Weather_now } from "./components";
import { setUserLocation } from "./redux";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    await navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
          dispatch(setUserLocation({ latitude, longitude }));
    })
  }, []);

    return (
        <div>
            <Header/>
            <Weather_now/>
        </div>
    );
}
