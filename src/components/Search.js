import { useState } from "react";
import { useDispatch } from "react-redux";

import { getSearchCity } from "../services";
import { SearchDropContainer } from "./SearchDropContainer";
import { getForecast5day3hour } from "../services/weather";
import { setCity, setWeather } from "../redux";

export const Search = () => {
    const [arrCities, setArrCities] = useState(null);
    const [searchValue, setSearchValue] = useState('');

    const dispatch = useDispatch();
    const typeSearchValue = async ({currentTarget: {value}}) => {
        setSearchValue(value);
        setArrCities(false);

        if (value.length > 2) {
            try {
                // setLoading(true);

                const {list} = await getSearchCity(value);
                setArrCities(list);
            } catch (e) {
                console.error(e);
            } finally {
                // setLoading(false)
            }
        }
    };

    const chooseCity = async (id) => {
        try {
            const response = await getForecast5day3hour(id);

            dispatch(setWeather(response.list));
            dispatch(setCity(response.city));
        } catch (e) {

        }
    }

    return (
        <div>
            <input onInput={typeSearchValue}
                // onClick={() => setDropDownIsVisible(true)}
                   value={searchValue}
                   placeholder={'search...'}
                // className={`${styles.searchInput} ${theme ? styles.dark : styles.white}`}
            />

            {
                arrCities && <SearchDropContainer arrCities={arrCities} chooseCity={chooseCity}/>
            }
        </div>
    );
}
