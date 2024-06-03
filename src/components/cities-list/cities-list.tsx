import { CITIES } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store';
import { CityType } from '../../types/city-type';
import { CitiesElement } from '../cities-element/cities-element';
import { memo } from 'react';

function CitiesList() {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: CityType) => {
    dispatch(changeCity(city));
  };
  return (
    <ul className="locations__list tabs__list">
      {Object.values(CITIES).map((city) => (
        <CitiesElement
          key={city.name}
          city={city}
          onCityChange={handleCityChange}
        />
      ))}
    </ul>
  );
}

const MemoizedCitiesList = memo(CitiesList);

export default MemoizedCitiesList;
