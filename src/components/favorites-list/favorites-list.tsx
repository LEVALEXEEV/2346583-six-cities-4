import { OfferType } from '../../types/offer-type';
import FavoritesOffer from '../favorites-offer/favorites-offer';


type favoritesListProps = {
  offers: OfferType[];
};

function favoritesList({offers}: favoritesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (<FavoritesOffer key={offer.id} offerData={offer}/>))}
    </div>
  );
}

export default favoritesList;
