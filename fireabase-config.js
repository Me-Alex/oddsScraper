  const firebaseConfig = {
    apiKey: "AIzaSyDhrsqEIJz2knA2Lf7uB57J9SaaBDPOf-o",
    authDomain: "football2-78423.firebaseapp.com",
    databaseURL: "https://football2-78423-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "football2-78423",
    storageBucket: "football2-78423.appspot.com",
    messagingSenderId: "837207657626",
    appId: "1:837207657626:web:ec7218ef14b394afc22323",
    measurementId: "G-89H01QQJW1"
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