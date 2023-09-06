import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getDatabase, set, ref} from "firebase/database"

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
// import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

class Firebase {

    constructor() {
        this.app = initializeApp(firebaseConfig)
        this.db = getDatabase(this.app)
        this.auth = getAuth();
        this.isLogged = false;
        this.credentials = null;
    }

    // *** AUTH API ***
    async doCreateUserWithEmailAndPassword(email, password) {
        try {
            const auth = getAuth();
            const db = getDatabase();
            const credentials = await createUserWithEmailAndPassword(auth, email, password)
            await sendEmailVerification(credentials.user);
            const newUser = await set(ref(db, 'users/' + credentials.user.uid),{
                "uid": credentials.user.uid,
                "email": email,
            });
            alert('Aviso', 'Um email foi enviado para' + credentials.email + ' para fazer a verificação.');
            return true;
        } catch (error) {
            console.error(error.message)
            throw error;
        }
    }

    async doSignInWithEmailAndPassword(email, password) {
        try {
            const auth = getAuth();
            const credentials = await signInWithEmailAndPassword(auth, email, password);
            if (!auth.currentUser.emailVerified) 
            {
                alert("Verifique sua conta antes de entrar no site");
                auth.signOut();
                return false;
            } else {
                this.isLogged = true;
                return credentials.user;
        }
        } catch (error) {
            console.error(error.message)
            throw error;
        }
    }

    doSignOut = () => {
        this.auth.signOut();
    };
}

export default Firebase;
