import { CityType } from '../../types/city-type';
import { useCallback, useState } from 'react';
import { OfferType } from '../../types/offer-type';
import OffersSorting from '../offers-sorting/offers-sorting';
import OffersList from '../offers-list/offers-list';
import { Map } from '../map/map';

type CityOffersProps = {
  city: CityType;
  currentCityOffers: OfferType[];
};

function CityOffers({ city, currentCityOffers }: CityOffersProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<OfferType | undefined>(undefined);

  const onMouseEnter = useCallback(
    (offer: OfferType) => setSelectedOffer(offer),
    []
  );

  const onMouseLeave = useCallback(
    () => setSelectedOffer(undefined),
    []
  );

  return (
    <div className="cities">
      {currentCityOffers.length ? (
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{currentCityOffers.length} places to stay in {city.name}</b>
            <OffersSorting />
            <OffersList offers={currentCityOffers} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                offers={(currentCityOffers)}
                city={city}
                selectedOffer={selectedOffer}
              />
            </section>
          </div>
        </div>
      ) : (
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {city.name}</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      )}
    </div>
  );
}

export default CityOffers;
