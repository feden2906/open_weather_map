import { useSelector } from "react-redux";

export const Weather_now = () => {
    const {weather, city} = useSelector(({weather}) => weather);

    return (
        <div>

        </div>
    );
}
