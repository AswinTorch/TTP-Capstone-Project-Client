import firebase from "firebase";

const config = {
  apiKey: "AIzaSyADzWxNJ68920R3i216Q2_er3KmJjVLLGg",
  authDomain: "ttp-capstone-project.firebaseapp.com",
  databaseURL: "https://ttp-capstone-project.firebaseio.com",
  projectId: "ttp-capstone-project",
  storageBucket: "ttp-capstone-project.appspot.com",
  messagingSenderId: "102039581",
  appId: "1:102039581:web:421cec645b5821515946f4",
};

firebase.initializeApp(config);
export default firebase;
