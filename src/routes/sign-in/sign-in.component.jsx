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
            <button id='google-button' class='google-button-container' onClick={logGoogleUser}>
                SIGN-IN
            </button>


        </div>
    )
}

export default SignIn;