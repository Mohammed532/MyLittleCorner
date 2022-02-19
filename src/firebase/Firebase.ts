import { initializeApp, FirebaseApp } from 'firebase/app'
import { Auth, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, UserCredential } from 'firebase/auth'
import { Firestore, getFirestore } from 'firebase/firestore'
import { CreateUserCredentials, FBConfig, User, UserCredentials } from './types/FirebaseTypes'

/**
 * Firebase class
 * ! WIP: need to finish writing methods
 * * Note: custom types are stored in FirebaseTypes.ts 
 */
class Firebase {
    readonly _app: FirebaseApp;
    readonly _auth: Auth;
    readonly _db: Firestore;
    user?: User;

    constructor(config: FBConfig) {
        this._app = initializeApp(config);
        this._auth = getAuth(this._app);
        this._db = getFirestore(this._app);
        this.setCurrentUser();
        
    }

    //                 AUTH                    //

    /**
     * createUser(UserCredentials) => Promise<UserCredential>
     * - Method creates a new user, signs them in, and store their information in user object.
     * 
     * ! WIP: Need to create user doc in DB
     * TODO: Need to test method. Need to update for multiple login types (currently only works for email-password login)
     */
    async createUser({type, email, password, fname, lname }: CreateUserCredentials): Promise<UserCredential> {
        try {
            let res = await createUserWithEmailAndPassword(this._auth, email, password)
            this.user = {
                // primary_email: res.user.email,
                // fn
                // isSignedIn: true, 
            } 
            return res;  
        } catch (err: any) {
            throw new Error(err.code);
        }
    }

    signUserIn(): void {

    }

    signUserOut(): void {
        
    }

    deleteUser(): void {

    }

    updateUser(): void {

    }

    /**
     * setCurrentUser() => void
     * - Checks to see if user is signed in, and sets the user object with user information.
     *   Also is used to for client side checking of auth status
     * 
     *  TODO: Need to test
     */
    setCurrentUser(): void {
        onAuthStateChanged(this._auth, usr => {
            if(usr){
                this.user = {
                    username: usr.displayName,
                    primary_email: usr.email,
                    isSignedIn: true,
                }
            } else {
                this.user = {
                    username: null,
                    primary_email: null,
                    isSignedIn: false
                }
            }
        })
    }

    isSignedIn(): boolean {
        return (this._auth.currentUser ? true : false);
    }


    //            FIRESTORE DB             //

    createCorner(): void {

    }

    updateCorner(): void {

    }

    deleteCorner(): void {

    }
}

export default Firebase