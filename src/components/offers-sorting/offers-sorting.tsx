import { memo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SortTypes } from '../../const';
import { changeSortingType, getSelectedSortType } from '../../store';

function OffersSorting() {
  const [isOpen, setIsOpen] = useState(false);
  const selectedSortType = useAppSelector(getSelectedSortType);

  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => setIsOpen(!isOpen)}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={
          `places__options places__options--custom
          ${isOpen ? 'places__options--opened' : ''}`
        }
      >
        {Object.values(SortTypes).map((type) => (
          <li
            key={type}
            className={`places__option ${selectedSortType === type && 'places__option--active'}`}
            tabIndex={0}
            onClick={() => dispatch(changeSortingType(type))}
          >
            {type}
          </li>
        ))}

      </ul>
    </form>
  );
}

const memoizedOffersSorting = memo(OffersSorting);

export default memoizedOffersSorting;
