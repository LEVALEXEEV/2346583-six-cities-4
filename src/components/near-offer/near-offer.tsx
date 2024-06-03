import { Link } from 'react-router-dom';
import { formatRating } from '../../utils';
import FavoriteButton from '../favorite-button/favorite-button';
import { OfferType } from '../../types/offer-type';

type NearOfferProps = {
  offer: OfferType;
};

function NearOffer({ offer }: NearOfferProps): JSX.Element {
  return (
    <article
      className="near-places__card place-card"
    >
      {offer.isPremium && <div className="place-card__mark"> <span>Premium</span> </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <Link to={`/offer/${offer.id}`}>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <FavoriteButton
              isFavorite={offer.isFavorite}
              id={offer.id}
              width="18"
              height="19"
              buttonClass="place-card__bookmark-button"
              activeClass="place-card__bookmark-button--active"
              iconClass="place-card__bookmark-icon"
            />
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: formatRating(offer.rating)}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            {offer.title}
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </Link>
    </article>
  );
}

export default NearOffer;
