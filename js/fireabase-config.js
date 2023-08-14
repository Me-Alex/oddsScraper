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