import { Link } from 'react-router-dom';

function Page404(): JSX.Element {
  return (
    <>
      <h1>404. =(.</h1>
      <Link to='/'>
        Вернуться на главную страницу.
      </Link>
    </>
  );
}

export default Page404;
