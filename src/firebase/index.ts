import { FirebaseProvider, withFirebase } from "./hoc/withFirebase"
import useFirebase from "./hooks/useFirebase"
import Firebase from "./Firebase"
import { firebaseConfig } from "./fbConfig"

export default Firebase
export { FirebaseProvider, withFirebase, useFirebase, firebaseConfig }