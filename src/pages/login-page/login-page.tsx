import { Link, useNavigate } from 'react-router-dom';
import HeaderLogo from '../../components/header-logo/header-logo';
import { FormEvent, useRef } from 'react';
import { CITIES } from '../../const';
import { CityType } from '../../types/city-type';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity, getIsSubmittingLogin, loginAction } from '../../store';
import { getRandomArrayElement, isPasswordValid } from '../../utils';

function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const isSubmittingLogin = useAppSelector(getIsSubmittingLogin);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const randomCity = getRandomArrayElement(Object.keys(CITIES));
  const randomCityDetails: CityType = CITIES[randomCity];

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const login = loginRef.current?.value;
    const password = passwordRef.current?.value;

    if (password && login && isPasswordValid(password)) {
      dispatch(loginAction({ login, password }));
      navigate('/');
      return ;
    }
    toast.error('Некорректный пароль!');
  };


  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <HeaderLogo />
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={loginRef} disabled={isSubmittingLogin}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={passwordRef} disabled={isSubmittingLogin}/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item" >
              <Link className="locations__item-link" to="/" >
                <span onClick={ () => dispatch(changeCity(randomCityDetails)) }>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
