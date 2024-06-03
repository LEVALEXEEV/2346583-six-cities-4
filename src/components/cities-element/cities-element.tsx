import { useAppSelector } from '../../hooks';
import { getSelectedCity } from '../../store';
import { CityType } from '../../types/city-type';


type CitiesElementProps = {
  city: CityType;
  onCityChange: (city: CityType) => void;
};

export function CitiesElement({city, onCityChange}: CitiesElementProps) {
  return(
    <li className="locations__item" onClick={(evt) => {
      evt.preventDefault();
      onCityChange(city);
    }}
    >
      <a className={
        `locations__item-link
        tabs__item
        ${useAppSelector(getSelectedCity) === city ? 'tabs__item--active' : ''}`
      } href="#"
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}
