
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
    collectionGroup,
    doc,
    setDoc,
    query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const auth = getAuth(app);
const btnLogout = document.querySelector(".logout");
const database = getDatabase();
console.log(database);
//authenticate with google
const provider = new GoogleAuthProvider;
let signInGoogleBtn = document.querySelector("#google");

if (signInGoogleBtn) {
    signInGoogleBtn.onclick = () => {
        signInWithPopup(auth, provider).then(async () => {
            const user = auth.currentUser;
            const Uemail = user.email;
            const UphotoUrl = user.photoURL;
            const Uname = user.displayName;
            const Uphone = user.phoneNumber;

            console.log(user.displayName);
            localStorage.setItem("User", user.displayName);
            localStorage.setItem("Email", Uemail);
            localStorage.setItem("Photo", UphotoUrl);
            localStorage.setItem("Uid",  user.uid);
            set(ref(database, 'users/' + user.uid), {
                username: "0",
                email: "23",
                profile_picture: "4334"
            });
            await setDoc(doc(db, "users", user.uid), {
                email: Uemail,
                phone: Uphone,
                name: Uname,
                photoUrl: UphotoUrl

            });
            for (let index = 0; index < 20; index++) {
                await setDoc(doc(db, "users/" + user.uid, "userBets/"+index), {
                    bettedValue: "100",
                    currency: "ROn",
                    matchID: 2100430403,
                    oddValue: 1.23,
                    profit: "",
                    result: "win",
    
                });
                
            }
         
            await setDoc(doc(db, "users/" + user.uid, "profit/profitId"), {
                profit: "1000"

            });
            // db.collection("users").doc(user.uid).collection("userBets").doc("betId").set({
            //     email: "ceva",
            //     state: "CA",
            //     country: "USA"
            // })
            //     .then(() => {
            //         console.log("Document successfully written!");
            //     })
            //     .catch((error) => {
            //         console.error("Error writing document: ", error);
            //     });

            window.location = "index.html";


        })
    }
}
// create account

const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
        if (user) {

            console.log(user);
            document.querySelector(".hide").display = "none";
            document.querySelector(".hide1").display = "none";
        }
    });
}
//check if a user is authenticated
//check if a user is authenticated
monitorAuthState();

//log out
const logout = async () => {
    await signOut(auth);
}

btnLogout.onclick = () => {
    logout();
    localStorage.removeItem('User');
    window.location.reload();
}


