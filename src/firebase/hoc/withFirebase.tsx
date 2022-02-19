import React, { FC, createContext, ComponentType } from "react"
import Firebase from "../Firebase"

interface FirebaseContextProps {
    firebase: Firebase
}

const FirebaseContext = createContext<Firebase | null>(null);

const FirebaseProvider: FC<FirebaseContextProps> = ({ firebase, children }) => (
    <FirebaseContext.Provider value={firebase}>{children}</FirebaseContext.Provider>
)


const withFirebase = <P extends object>(Comp:ComponentType<P>): FC<Omit<P, keyof FirebaseContextProps>> => props => (
    <FirebaseContext.Consumer>
        {firebase => <Comp {...props as P} firebase={firebase} />}
    </FirebaseContext.Consumer> 
)

export { FirebaseProvider, withFirebase }