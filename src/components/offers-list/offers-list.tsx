import { memo } from 'react';
import { useAppSelector } from '../../hooks';
import { OfferType } from '../../types/offer-type';
import { getSelectedSortType } from '../../store';
import { sortOffers } from '../../utils';
import Offer from '../offer/offer';


type OffersListProps = {
  offers: OfferType[];
  onMouseEnter: (point: OfferType) => void;
  onMouseLeave: () => void;
};

function OffersList({offers, onMouseEnter, onMouseLeave}: OffersListProps): JSX.Element {
  const selectedSortType = useAppSelector(getSelectedSortType);
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortOffers(offers, selectedSortType).map((offer) => (
        <Offer key={offer.id} offer={offer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      ))}
    </div>
  );
}

const MemoizedOffersList = memo(OffersList);

export default MemoizedOffersList;
