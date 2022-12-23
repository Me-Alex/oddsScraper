
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
