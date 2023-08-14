
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
function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
writeUserData("cineva","ceva","alfkajdlf:","cineva");

console.log("ACEST FISIER SA INCARCAT");

var playersRef = firebase.database().ref("players/");

playersRef.set ({
   John: {
      number: 1,
      age: 30
   },
	
   Amanda: {
      number: 2,
      age: 20
   }
});
