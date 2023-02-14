import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import SignIn  from '../sign-in/sign-in.component';
import { UserContext } from '../../contexts/user.context';

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

 /*    if currentUser {
        console.log(currentUser.displayName)
    } */

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
                    <SignIn />
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
  }


export default Navigation;