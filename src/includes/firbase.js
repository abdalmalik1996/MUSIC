import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCeuB7yMfxRGcZ9T2DXZ8qox2oMtNA0ALg',
  authDomain: 'music-bed9a.firebaseapp.com',
  projectId: 'music-bed9a',
  storageBucket: 'music-bed9a.appspot.com',
  appId: '1:773990258323:web:dd31d4851c88d5f9619f66'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch((error)=>{
  console.log(`firbase Persistence error ${error.code}` )
});

const userCollection = db.collection('users')
const songCollection = db.collection('songs')
const commentCollection = db.collection('comments')
export { auth, db, userCollection, storage, songCollection, commentCollection }
