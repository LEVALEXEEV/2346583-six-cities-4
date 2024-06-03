import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchfavoritesAction, getAuthCheckedStatus, getAuthorizationStatus, getIsOffersLoading } from '../../store';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import { Route, Routes } from 'react-router-dom';
import { browserHistory } from '../../browser-history';
import { AppRoutes } from '../../const';
import FrontPage from '../../pages/front-page/front-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import FavoritesPage from '../../pages/favourites-page/favourites-page';
import Page404 from '../../pages/page404/page404';


function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const areOffersLoading = useAppSelector(getIsOffersLoading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isAuthChecked) {
      dispatch(fetchfavoritesAction());
    }
  }, [dispatch, isAuthChecked]);

  if (areOffersLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (areOffersLoading)
    ? <LoadingScreen /> : (
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoutes.Main}>
            <Route index element={<FrontPage />} />
            <Route path={AppRoutes.Login} element={<LoginPage />} />
            <Route path={AppRoutes.Offer} element={<OfferPage />} />s
            <Route
              path={AppRoutes.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route path={AppRoutes.NotFound} element={<Page404 />} />
          </Route>
        </Routes>
      </HistoryRouter>
    );
}

export default App;
