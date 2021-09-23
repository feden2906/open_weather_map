import { useSelector } from "react-redux";

export const Weather_now = () => {
    const {weather, city} = useSelector(({weather}) => weather);
    console.log(city)
    return (
        <div>

        </div>
    );
}
