import { useState } from "react"
import Firebase from './../Firebase'
import { firebaseConfig } from './../fbConfig'

const firebase = new Firebase(firebaseConfig);

const useFirebase = () => {
    const [fb] = useState(firebase);
    return fb;
}

export default useFirebase