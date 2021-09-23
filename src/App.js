import { getForecast, getForecast5day3hour } from "./services/weather";
import { useEffect } from "react";

export const App = () => {
    useEffect(async () => {
        const a = await getForecast5day3hour('Київ,uk');
        console.log(a)
    }, [])

    return (
        <div>

        </div>
    );
}
