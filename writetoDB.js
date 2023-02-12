
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
