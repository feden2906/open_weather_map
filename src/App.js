import { Header, Weather_now } from "./components";
import { useEffect, useState } from "react";

export const App = () => {
  const [state, setState] = useState(null);

  useEffect(async () => {
    await navigator.geolocation.getCurrentPosition(
        position => {
          setState({ latitude: position.coords.latitude, longitude: position.coords.longitude })
        }
    )
  }, [])
  console.log(state)
    return (
        <div>
            <Header/>
            <Weather_now/>
        </div>
    );
}
