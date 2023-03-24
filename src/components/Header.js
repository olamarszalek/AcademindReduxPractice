import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';

const Header = () => {

  const dispatch = useDispatch();

  const logOutHandler = (event) => {
    event.preventDefault();
  
    dispatch(authActions.logout());
    }

  const isAuth = useSelector(state => state.authentication.isAuthenticated);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logOutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
      
    </header>
  );
};

export default Header;
