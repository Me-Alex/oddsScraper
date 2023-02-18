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
    ref,
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
  apiKey: "AIzaSyAYL7vd3pD0lOLRi79TfB60pqGBxaf7RCQ",
  authDomain: "football-1a983.firebaseapp.com",
  databaseURL: "https://football-1a983-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "football-1a983",
  storageBucket: "football-1a983.appspot.com",
  messagingSenderId: "444728787060",
  appId: "1:444728787060:web:9dbbe5e62523794cb55121",
  measurementId: "G-WSRYK9XJFV"
  };

// Initialize Firebase
var app = initializeApp(firebaseConfig);
var db = getFirestore(app);
const btnLogout = document.querySelector(".logout");
const database = getDatabase();
let userID = localStorage.getItem("Uid");


// const docRef = doc(db, "users/"+userID+"/userBets/");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
// } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
// }
let userProfit = 0, userTotalBetedValue = 0;
let ctr=0;

const querySnapshot = await getDocs(collection(db, "users/" + userID + "/userBets"));
console.log(querySnapshot);
querySnapshot.forEach((doc) => {
    ctr++;
    // doc.data() is never undefined for query doc snapshots
    if (doc.data().result == "win") {
        userProfit += parseInt(doc.data().bettedValue) * doc.data().oddValue;//fara parseInt la oddValue pentru ca rotunjeste la cel mai apropiat nr intreg , cu placere future me 
        userTotalBetedValue += parseInt(doc.data().bettedValue);//fara parseInt la oddValue pentru ca rotunjeste la cel mai apropiat nr intreg , cu placere future me 
    }
   let array= querySnapshot._snapshot.docChanges.length;
    // console.log(doc.data().bettedValue);
    // console.log(doc.id, " => ", doc.data());
    if (ctr === array) {
        console.log(userProfit);
        console.log(userTotalBetedValue);
        console.log("Profit "+(userProfit-userTotalBetedValue));
        document.querySelector("#betsPlaced").innerHTML = array;
        document.querySelector("#profits").innerHTML = userProfit-userTotalBetedValue;
        document.querySelector("#BettedValue").innerHTML = userTotalBetedValue;
    }
});
