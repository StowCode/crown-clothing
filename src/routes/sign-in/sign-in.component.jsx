import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'

import '../sign-in/sign-in.styles.scss';

import { 
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
 } from '../../utils/firebase/firebase.utils';

 import SignUpForm from '../../comps/sign-up/sign-up.component';


const SignIn = () => {
/*     useEffect(async () => {
        const response = await getRedirectResult(auth);
        if(response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    }, []) */

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <button id='google-button' onClick={logGoogleUser}>
                Sign-In
            </button>

            

        {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}

        </div>
    )
}

export default SignIn;