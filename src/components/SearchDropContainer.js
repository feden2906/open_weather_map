import { SearchDropItem } from "./SearchDropItem";

export const SearchDropContainer = ({arrCities, ...rest}) => {
    return (
        <div>
            {
                arrCities.map(item => <SearchDropItem item={item} key={item.id} {...rest}/>)
            }
        </div>
    );
}
