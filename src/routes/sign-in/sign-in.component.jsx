import { useEffect, useContext } from 'react';
import { getRedirectResult } from 'firebase/auth'

import '../sign-in/sign-in.styles.scss';
import { UserContext } from '../../contexts/user.context';

import { 
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
 } from '../../utils/firebase/firebase.utils';


const SignIn = () => {

    const { setCurrentUser } = useContext(UserContext);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
        setCurrentUser(user)
    }

    return(
        <div>
            <span id='google-button' className='google-button nav-link' onClick={logGoogleUser}>
                SIGN IN
            </span>


        </div>
    )
}

export default SignIn;