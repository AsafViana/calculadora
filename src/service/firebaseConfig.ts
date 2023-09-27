// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getDatabase, set, ref, onValue, get, child, update, remove,  } from 'firebase/database'
import { collection, onSnapshot, orderBy, query, getFirestore, addDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDF5293JVp5hMPuLJraIE8laajNSgnMTWI',
	authDomain: 'chat-da-luh-e-asaf.firebaseapp.com',
	databaseURL: 'https://chat-da-luh-e-asaf-default-rtdb.firebaseio.com',
	projectId: 'chat-da-luh-e-asaf',
	storageBucket: 'chat-da-luh-e-asaf.appspot.com',
	messagingSenderId: '341687782633',
	appId: '1:341687782633:web:d8dac64448054c15dff478',
	measurementId: 'G-EJRB41MHJV',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const database = getDatabase(app)
const dbRef = ref(database)
const firestore = getFirestore(app)

export {
	dbRef,
	onValue,
	set,
	get,
	child,
	update,
	remove,
	ref,
	database,
	collection,
	firestore,
	orderBy,
	query,
	onSnapshot,
	addDoc
}
