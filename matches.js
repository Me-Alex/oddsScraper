import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    signInWithPopup,
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import {
    getDatabase,
    ref, get, child,
    set
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    collectionGroup,
    doc,
    setDoc,
    query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCQI5eBrdqb-4vC_qpXym0FDMUFvtQBLlE",
  authDomain: "football4-92626.firebaseapp.com",
  databaseURL: "https://football4-92626-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "football4-92626",
  storageBucket: "football4-92626.appspot.com",
  messagingSenderId: "301682203151",
  appId: "1:301682203151:web:4f74e6845976f9475ce17a",
  measurementId: "G-BVLE06PEL4"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);
var db = getFirestore(app);
const btnLogout = document.querySelector(".logout");
const database = getDatabase();
let userID = localStorage.getItem("Uid");


let container = document.querySelector('.containerB');
container.outerHTML = "";
let BigContainer = document.querySelector('.containerBody2');

const dbRef = ref(getDatabase());
get(child(dbRef, `meciuri-BetanoWithId`)).then((snapshot) => {

    if (snapshot.exists()) {
        let values = snapshot.val();
        let counter = 0;
        for (const [key, value] of Object.entries(values)) {
            if ((new Date(values[key].startTime - Date.now())) / 1000 / 60 > 0) {
                counter++;
                container.querySelector('.team1Name').innerText = values[key].name.split('-')[0];
                container.querySelector('.team2Name').innerText = values[key].name.split('-')[1];
                container.querySelector('#match_type').innerText = counter + " of " + Object.keys(values).length;
                container.querySelector('.date_time').innerText = "Starts in " + formatTIme(new Date(values[key].startTime - Date.now()));
                BigContainer.innerHTML += container.outerHTML;

            }
        }
        console.log(snapshot);
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});



function formatTIme(ms) {
    let seconds = (ms / 1000).toFixed(1);
    let minutes = (ms / (1000 * 60)).toFixed(1);
    let hours = (ms / (1000 * 60 * 60)).toFixed(1);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);

    if (days > 1) {
        return Math.round(days)+' d';
    } else if (hours > 1) {
        return Math.round(hours)+" h";
    } else if (minutes > 1) {
        return Math.round(minutes)+' m';
    }
}