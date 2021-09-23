export const SearchDropItem = ({item, chooseCity}) => {
    const {weather, name, sys, main, id} = item;

    return (
        <div onClick={() => chooseCity(id)}>
            {name}
            {main.temp}*C
            <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={weather[0].description}/>
            <img src={`http://openweathermap.org/images/flags/${sys.country.toLowerCase()}.png`} alt={weather[0].description} width={30}/>
        </div>
    );
}
