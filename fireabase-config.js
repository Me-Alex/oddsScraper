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
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
var database = firebase.database();


//DACA CEVA NU MERCE DECOMMNET codul de mai sus

// console.log(db);
// db.collection("mancare5").doc("LA2").collection("mancare5").doc("siID").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })
//     .then(() => {
//         console.log("Document successfully written!");
//     })
//     .catch((error) => {
//         console.error("Error writing document: ", error);
//     });