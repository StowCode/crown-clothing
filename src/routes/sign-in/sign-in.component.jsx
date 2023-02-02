import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'

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
            <h1>Sign In</h1>

            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>

            <SignUpForm />

{/*             <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}

        </div>
    )
}

export default SignIn;