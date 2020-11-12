import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyCqbPMFY63xRDsoMYb0Xm6i7V2r-UQCKno",
    authDomain: "crwn-db-79299.firebaseapp.com",
    databaseURL: "https://crwn-db-79299.firebaseio.com",
    projectId: "crwn-db-79299",
    storageBucket: "crwn-db-79299.appspot.com",
    messagingSenderId: "959118734362",
    appId: "1:959118734362:web:05a77ed6765ab8355e8da3",
    measurementId: "G-4YPT1S3YY1"
  };


export const createUserProfileDocument = async (userAuth,additionalData)=>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if(!snapshot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
      }catch(error){
        console.log('error creating user',error.message);
      }

  }
  return userRef
}  

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
prompt: 'select_account'
});


export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;