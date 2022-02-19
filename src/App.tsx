import { MouseEvent } from 'react';
import { Button } from './components/ui'
import Firebase, { withFirebase } from './firebase'

interface P {
  firebase: Firebase
}

function App( {firebase}: P ) {
  firebase.createUser({type:'email-password', email: 'mo@gmail.com', password: '123456789'}).catch(err => console.log('got err ' + err.message));
  
  console.log(firebase.isSignedIn());
  

  const signup = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    firebase.createUser({type:'email-password', email: 'mo@gmail.com', password: '123456789'})
      .catch(err => console.log('got err ' + err.message));
    console.log(firebase.isSignedIn());
    
  }

  const logout = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <Button text={'Sign In'} type={'contained'} color={'primary'} onClick={signup}/>
      <Button text={'Log Out'} type={'contained'} color={'primary'} onClick={logout} />
    </div>
  );
}

export default withFirebase(App);
