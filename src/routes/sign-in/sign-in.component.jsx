import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'

import '../sign-in/sign-in.styles.scss';

import { 
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
 } from '../../utils/firebase/firebase.utils';



const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <button id='google-button' class='button-container' onClick={logGoogleUser}>
                SIGN-IN
            </button>


        </div>
    )
}

export default SignIn;