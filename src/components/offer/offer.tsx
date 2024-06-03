import { Link } from 'react-router-dom';
import { OfferType } from '../../types/offer-type';
import FavoriteButton from '../favorite-button/favorite-button';


type OfferProps = {
  onMouseEnter: (offer: OfferType) => void;
  onMouseLeave: () => void;
  offer: OfferType;
};

function Offer({onMouseEnter, onMouseLeave, offer}: OfferProps): JSX.Element {

  const premiumBlock = (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  return (
    <article className="cities__card place-card"
      onMouseEnter={(evt) => {
        evt.preventDefault();
        onMouseEnter(offer);
      }}
      onMouseLeave={(evt) => {
        evt.preventDefault();
        onMouseLeave();
      }}
    >
      {offer.isPremium ? premiumBlock : null}
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
              <span style={{width: `${offer.rating / 5 * 100}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </Link>
    </article>
  );
}

export default Offer;
