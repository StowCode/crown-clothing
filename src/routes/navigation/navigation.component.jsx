import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import SignIn  from '../sign-in/sign-in.component';
import { UserContext } from '../../contexts/user.context';
import {signOutUser} from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
        console.log('Signed Out')
    }

    // if there is a currentUser tell us the displayName
    const findName = () => {
        try {
            console.log(currentUser.displayName)
        } catch (error) {
            return;
        }
    }
    findName();


    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrownLogo className='logo' />
                </Link>
                
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>HOME</Link>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    <Link className='nav-link' to='/contact'>CONTACT</Link>

                    {currentUser ? (<span className='nav-link google-button' onClick={signOutHandler}>SIGN OUT</span>) : (<SignIn />) }

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
  }


export default Navigation;